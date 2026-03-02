import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import finca from "../assets/finca.jpeg";
import "./InviteCard.css";

/* ===== VARIANTS CTA ===== */
const scrollVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, 6, 0],
    transition: {
      opacity: { duration: 0.6, delay: 1.6 },
      y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

export default function InviteCard({ reveal }) {
  const [showMini, setShowMini] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMini(false);
    }, 10000); // 10 segundos reales

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="invite-hero">
      <AnimatePresence>
        {showMini && (
          <motion.div
            className="mini-player"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mini-waves">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mini-player-text">
              <span className="mini-title">A un milímetro de ti</span>
              <span className="mini-artist">Antonio José</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagen */}
      <img src={finca} alt="Finca" className="hero-image-mobile" />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Contenido */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={reveal ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-center">
          <span className="hero-eyebrow">Nos casamos</span>

          <h1 className="hero-names">
            <span className="name">Irene</span>
            <span className="amp">&</span>
            <span className="name">Kevin</span>
          </h1>

          <motion.div
            className="hero-date"
            initial={{ opacity: 0, y: 10 }}
            animate={reveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            26 · Septiembre · 2026
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll"
          variants={scrollVariants}
          initial="hidden"
          animate={reveal ? "visible" : "hidden"}
        >
          <span className="hero-cta">Confirma tu asistencia</span>
          <span className="hero-arrow" />
        </motion.div>
      </motion.div>
    </section>
  );
}
