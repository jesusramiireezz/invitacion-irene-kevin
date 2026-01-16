import { useState } from "react";
import { motion } from "framer-motion";
import "./RSVPSection.css";

export default function RSVPSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

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
          {!sent ? (
            <>
              <span className="rsvp-eyebrow">Confirmar asistencia</span>
              <div className="rsvp-divider" />

              <form className="rsvp-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                />
                                <input
                  type="text"
                  placeholder="Email (opcional)"
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
