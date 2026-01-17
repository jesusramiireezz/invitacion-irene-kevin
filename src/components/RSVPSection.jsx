import { useState } from "react";
import { motion } from "framer-motion";
import "./RSVPSection.css";

export default function RSVPSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="rsvp-section">
      <motion.div
        className="rsvp-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="rsvp-card">
          <span className="rsvp-eyebrow">Confirmar asistencia</span>
          <div className="rsvp-divider" />

          {/* TEXTO EMOCIONAL */}
          <p className="rsvp-intro-text">
            Hay momentos en la vida que son especiales por sí solos,
            pero compartirlos con las personas que queremos
            los hace inolvidables.
          </p>

          {!sent ? (
            <>
              <form className="rsvp-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                />

                <div className="rsvp-choice">
                  <label>
                    <input type="radio" name="attendance" required />
                    Sí, asistiré
                  </label>
                  <label>
                    <input type="radio" name="attendance" />
                    No podré asistir
                  </label>
                </div>

                {/* CANCIÓN */}
                <input
                  type="text"
                  placeholder="Canción que te gustaría que sonara (opcional)"
                />

                <textarea
                  placeholder="Intolerancias, alergias o comentario"
                  rows="3"
                />

                <button type="submit">Confirmar</button>
              </form>
            </>
          ) : (
            <div className="rsvp-success">
              <span>¡Gracias por avisarnos!</span>
              <p>Nos hace mucha ilusión contar contigo 💛</p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
