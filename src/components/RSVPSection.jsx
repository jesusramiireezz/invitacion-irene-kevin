import { useState } from "react";
import { motion } from "framer-motion";
import "./RSVPSection.css";
import fotoRSVP from "../assets/foto4.jpeg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxuleiU-Ruofss15FDEb7_dvdzvhJYytPZ1hDd6EnP71TV97d5J7vy8FQ5pfCviQki9_Q/exec";

export default function RSVPSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [menu, setMenu] = useState("");
  const [song, setSong] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name,
      attendance: attendance === "yes" ? "Sí" : "No",
      menu,
      song,
      comments
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      setSent(true);
    } catch (err) {
      alert("Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const renderSuccessMessage = () => {
    if (attendance === "yes") {
      return (
        <>
          <span>¡Gracias por avisarnos!</span>
          <p>Nos hace mucha ilusión contar contigo</p>
        </>
      );
    }

    return (
      <>
        <span>¡Gracias por avisarnos!</span>
        <p>
          Sentimos mucho que no puedas acompañarnos,
          pero te tendremos muy presente ese día
        </p>
      </>
    );
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

        {/* CARD */}
        <div className="rsvp-card">
          <span className="rsvp-eyebrow">Confirmar asistencia</span>
          <div className="rsvp-divider" />

          <p className="rsvp-intro-text">
            Hay momentos en la vida que son especiales por sí solos,
            pero compartirlos con las personas que queremos
            los hace inolvidables.
          </p>
          
        <motion.div
          className="rsvp-photo-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="rsvp-photo">
            <img src={fotoRSVP} alt="Irene, Kevin y su hijo" />
          </div>
        </motion.div>

          {!sent ? (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre y apellidos"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="rsvp-choice">
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    required
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  Sí, asistiré
                </label>

                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    onChange={(e) => {
                      setAttendance(e.target.value);
                      setMenu("");
                    }}
                  />
                  No podré asistir
                </label>
              </div>

              {attendance === "yes" && (
                <div className="rsvp-menu">
                  <span className="rsvp-menu-title">
                    Preferencia de menú
                  </span>

                  <label>
                    <input
                      type="radio"
                      name="menu"
                      value="carne"
                      required
                      onChange={(e) => setMenu(e.target.value)}
                    />
                    Carne · Meloso de ternera en su jugo con patata gratén
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="menu"
                      value="pescado"
                      onChange={(e) => setMenu(e.target.value)}
                    />
                    Pescado · Lubina con pesto rojo y pasta nero di seppia
                  </label>
                </div>
              )}

              <input
                type="text"
                placeholder="Canción que te gustaría que sonara (opcional)"
                value={song}
                onChange={(e) => setSong(e.target.value)}
              />

              <textarea
                placeholder="Intolerancias, alergias o comentario"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />

              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Confirmar"}
              </button>
            </form>
          ) : (
            <div className="rsvp-success">
              {renderSuccessMessage()}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}