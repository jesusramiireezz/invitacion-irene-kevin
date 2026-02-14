import { useState } from "react";
import { motion } from "framer-motion";

import p1 from "../assets/1.jpeg";
import p2 from "../assets/2.jpeg";
import p3 from "../assets/3.jpeg";
import p4 from "../assets/4.jpeg";
import p5 from "../assets/5.jpeg";
import p6 from "../assets/6.jpeg";
import p7 from "../assets/7.jpeg";
import p8 from "../assets/8.jpeg";
import p9 from "../assets/9.jpeg";
import p10 from "../assets/10.jpeg";
import p11 from "../assets/11.jpeg";
import p12 from "../assets/12.jpeg";
import p13 from "../assets/13.jpeg";
import p14 from "../assets/14.jpeg";

import "./PolaroidSection.css";

const photos = [
  { src: p1, rotate: -6 },
  { src: p2, rotate: 4 },
  { src: p3, rotate: -3 },
  { src: p4, rotate: 6 },
  { src: p5, rotate: -5 },
  { src: p6, rotate: 3 },
  { src: p7, rotate: -4 },
  { src: p8, rotate: 5 },
  { src: p9, rotate: -6 },
  { src: p10, rotate: 2 },
  { src: p11, rotate: -2 },
  { src: p12, rotate: 5 },
  { src: p13, rotate: -4 },
  { src: p14, rotate: 3 }
];

export default function PhotosSection() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="photos-section">
      <motion.div
        className="photos-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="photos-card">

          {/* TITULO = EYEBROW (IGUAL QUE ITINERARIO) */}
          <span className="photos-eyebrow">Nuestra historia por el mundo</span>
          <div className="photos-divider" />

          {/* POLAROIDS */}
          <div className="polaroid-track">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="polaroid"
                style={{ transform: `rotate(${photo.rotate}deg)` }}
                onClick={() => setActivePhoto(photo.src)}
              >
                <img src={photo.src} alt="" />
              </div>
            ))}
          </div>
          <p className="photos-hint">Desliza para ver más</p>


        </div>
      </motion.div>

      {/* MODAL */}
      {activePhoto && (
        <div className="photo-modal">
          <button
            className="photo-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <img src={activePhoto} alt="" />
        </div>
      )}
    </section>
  );
}
