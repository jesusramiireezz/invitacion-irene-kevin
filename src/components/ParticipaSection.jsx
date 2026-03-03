import { motion } from "framer-motion";
import "./ParticipaSection.css";
import qrFotos from "../assets/qr-fotos.png";
import fotoParticipa from "../assets/foto3.jpeg";

export default function ParticipaSection() {
  return (
    <section className="participa-section">
      <motion.div
        className="participa-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="participa-card">

          {/* 🎶 CANCIÓN */}
          <span className="participa-eyebrow">La banda sonora</span>
          <div className="participa-divider" />

          <p className="participa-text">
            Nos encantaría que formaras parte de este día tan especial.
            <br />
            Más abajo podrás indicarnos qué canción te gustaría
            que sonara en nuestra boda.
          </p>

          <div className="participa-divider big" />

          {/* 📸 FOTOS */}
          <span className="participa-eyebrow">Comparte tus fotos</span>
          <div className="participa-divider" />

          <p className="participa-text">
            Podrás subir tus fotos del día escaneando este código
            o a través de este enlace:
          </p>

          <div className="qr-box">
            <img src={qrFotos} alt="QR Fotos Boda" />
          </div>

          <a
            className="participa-link"
            href="https://web.dotstheapp.com/a?group=2393358&dlBy=kevinandujar1023&code=Vct6bqY1Gtsk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comparte tus fotos aquí
          </a>

        </div>

        <motion.div
          className="participa-photo-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="participa-photo">
            <img src={fotoParticipa} alt="Irene y Kevin" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}