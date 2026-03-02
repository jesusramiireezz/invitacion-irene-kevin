import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fotoUbicacion from "../assets/foto2.jpeg";
import "./InfoCardsSection.css";

const WEDDING_DATE = new Date("2026-09-26T17:00:00");

/* ===== ANIMATION VARIANTS ===== */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function InfoCardsSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const i = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(i);
  }, []);

  function getTimeLeft() {
    const diff = WEDDING_DATE - new Date();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  return (
    <section className="info-section">
      <motion.div
        className="info-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* COUNTDOWN */}
        <motion.div className="info-card" variants={cardVariants}>
          <motion.span className="card-eyebrow" variants={itemVariants}>
            Faltan
          </motion.span>

          <motion.div className="divider" variants={itemVariants} />

          <motion.div className="countdown-grid" variants={itemVariants}>
            <TimeBox value={timeLeft?.days} label="Días" />
            <TimeBox value={timeLeft?.hours} label="Horas" />
            <TimeBox value={timeLeft?.minutes} label="Minutos" />
            <TimeBox value={timeLeft?.seconds} label="Segundos" />
          </motion.div>
        </motion.div>

        {/* UBICACIÓN */}
        <motion.div className="info-card" variants={cardVariants}>
          <motion.span className="card-eyebrow" variants={itemVariants}>
            Ubicación
          </motion.span>

          <motion.div className="divider" variants={itemVariants} />

          <motion.h3 className="location-title" variants={itemVariants}>
            Finca Cugulutx
          </motion.h3>

          <motion.p className="location-text" variants={itemVariants}>
            Camí de Sa Torre, 15, 07609, Llucmajor
          </motion.p>

          <motion.div className="map-embed" variants={itemVariants}>
            <iframe
              title="Mapa Finca Cugulutx"
              src="https://www.google.com/maps?q=Finca+Cugulutx+Llucmajor&output=embed"
              loading="lazy"
            />
          </motion.div>

          <motion.a
            href="https://maps.app.goo.gl/DwxNqUyBCAM3iKoL6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            variants={itemVariants}
          >
            Ver en Google Maps
          </motion.a>
        </motion.div>

        <motion.div
          className="location-photo-wrapper"
          variants={cardVariants}
        >
          <div className="location-photo">
            <img src={fotoUbicacion} alt="Irene y Kevin" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <span className="time-value">{value ?? "00"}</span>
      <span className="time-label">{label}</span>
    </div>
  );
}