import { motion } from "framer-motion";
import finca from "../assets/finca.jpeg";
import "./InviteCard.css";

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

        <div className="hero-scroll">
          <span className="arrow" />
        </div>
      </motion.div>
    </section>
  );
}
