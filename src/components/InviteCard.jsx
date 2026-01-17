import { motion } from "framer-motion";
import finca from "../assets/finca.jpeg";
import "./InviteCard.css";

/* ===== VARIANTS CTA ===== */
const scrollVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: [0, 6, 0],
    transition: {
      opacity: {
        duration: 0.6,
        delay: 1.6,
      },
      y: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export default function InviteCard({ reveal }) {
  return (
    <section className="invite-hero">
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

        {/* CTA */}
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
