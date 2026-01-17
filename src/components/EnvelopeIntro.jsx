import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImg from "../assets/sobre.png"; // TU imagen del sobre
import "./EnvelopeIntro.css";

export default function EnvelopeIntro({ onFinish }) {
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    setClosing(true);
    setTimeout(onFinish, 900); // cuando termina el fade
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="envelope-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          onClick={handleClick}
        >
          <div className="envelope-wrapper">
            <img src={envelopeImg} alt="Sobre" className="envelope-img" />

            {/* SELLO */}
            <div className="wax-seal">
              I&nbsp;&amp;&nbsp;K
            </div>
          </div>

          <span className="tap-hint">Toca para abrir</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
