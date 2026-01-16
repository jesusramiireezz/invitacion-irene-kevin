import { useState } from "react";
import { motion } from "framer-motion";
import "./GiftSection.css";

export default function GiftSection() {
  return (
    <section className="gift-section">
      <motion.div
        className="gift-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="gift-card">
          {/* FAQ */}
          <span className="gift-eyebrow">Preguntas frecuentes</span>
          <div className="gift-divider" />

          <div className="faq-list">
            <FaqItem
              question="¿Puedo llevar acompañante?"
              answer="Ejemplo1"
            />

            <FaqItem
              question="¿Habrá parking disponible?"
              answer="Ejemplo2"
            />

            <FaqItem
              question="¿Puedo tomar fotos durante el evento?"
              answer="Ejemplo3"
            />

            <FaqItem
              question="¿Habrá opciones para intolerancias o dietas especiales?"
              answer="Ejemplo4"
            />
          </div>

          {/* SEPARADOR */}
          <div className="gift-divider big" />

          {/* REGALO */}
          <span className="gift-eyebrow">Regalo</span>

          <p className="gift-text">
            Lo más importante para para nosotros es compartir este día contigo.
            <br />
            Si deseas hacernos un regalo, puedes hacerlo aquí:
          </p>

          <div className="gift-iban">
            ES12&nbsp;3456&nbsp;7890&nbsp;1234&nbsp;5678&nbsp;9012
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ===== FAQ ITEM ===== */

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>

      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}
