import { motion } from "framer-motion";
import "./ItinerarySection.css";

export default function ItinerarySection() {
  return (
    <section className="itinerary-section">
      <motion.div
        className="itinerary-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="itinerary-card">
          <span className="itinerary-eyebrow">Itinerario</span>
          <div className="itinerary-divider" />

          <div className="itinerary-timeline">
            <Item icon="fa-location-dot" time="17:30" title="Llegada a la finca" />
            <Item icon="fa-ring" time="18:00" title="Ceremonia" />
            <Item icon="fa-champagne-glasses" time="19:00" title="Aperitivo" />
            <Item icon="fa-utensils" time="20:30" title="Cena" />
            <Item icon="fa-music" time="23:00" title="Fiesta" />
            <Item icon="fa-moon" time="01:00" title="Resopón" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Item({ icon, time, title }) {
  return (
    <div className="itinerary-item">
      <div className="itinerary-icon">
        <i className={`fa-solid ${icon}`} />
      </div>
      <span className="itinerary-time">{time} h</span>
      <span className="itinerary-title">{title}</span>
    </div>
  );
}
