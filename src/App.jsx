import { useState, useEffect } from "react";
import TulipLoader from "./TulipLoader";
import { motion } from "framer-motion";
import Petals from "./Petals";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1); // 1 = tulipán, 2 = tarjeta

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 3600); // pasa al paso 2 tras 3.6s
    return () => clearTimeout(t1);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FDFBF7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // evita scroll por los pétalos
      }}
    >
      {step === 1 && <TulipLoader />}

      {step === 2 && (
        <>
          {/* 🌸 Pétalos flotando */}
          <Petals />

          {/* 💌 Tarjeta elegante */}
          <motion.div
            className="invite-card fade-in-all"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="card-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            <h1>
              Irene{" "}
              <span
                style={{
                  fontFamily: "'Lora', serif",
                  fontStyle: "italic",
                  color: "#BBA77D",
                  fontWeight: 500,
                }}
              >
                &
              </span>{" "}
              Kevin
            </h1>

            <p className="phrase">Gracias por ser parte de nuestro viaje ✨</p>
            <p className="date">14 . Junio . 2025</p>
          </motion.div>
        </>
      )}
    </div>
  );
}
