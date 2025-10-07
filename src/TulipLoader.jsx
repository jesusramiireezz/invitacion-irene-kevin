import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TulipLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <motion.div
      initial={{ backgroundColor: "#fff3f6" }}
      animate={{ backgroundColor: "#FDFBF7" }}
      transition={{ delay: 2.2, duration: 1.2 }}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.svg
        width="110"
        height="110"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tallo */}
        <motion.path
          d="M50 50 C47 65, 53 80, 50 92"
          fill="none"
          stroke="#9B8B65"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* Hoja izquierda */}
        <motion.path
          d="M50 70 C42 68, 35 80, 47 84"
          fill="none"
          stroke="#9B8B65"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Hoja derecha */}
        <motion.path
          d="M51 70 C58 68, 65 80, 53 84"
          fill="none"
          stroke="#9B8B65"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Pétalo exterior (más oscuro, base del capullo) */}
        <motion.path
          d="M50 28 C56 36, 58 48, 50 58 C42 48, 44 36, 50 28 Z"
          fill="url(#petalGradient)"
          stroke="#D09A92"
          strokeWidth="1.3"
          initial={{ scale: 0.9, rotate: -2 }}
          animate={{
            scale: [0.9, 1.05, 1],
            rotate: [-2, 1, 0],
            transformOrigin: "bottom center",
          }}
          transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
        />

        {/* Pétalo interior (más claro) */}
        <motion.path
          d="M50 30 C54 37, 56 47, 50 56 C44 47, 46 37, 50 30 Z"
          fill="rgba(255,255,255,0.45)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
        />

        {/* Luz dorada */}
        <motion.circle
          cx="52"
          cy="38"
          r="1.8"
          fill="#D7BA89"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />

        {/* Degradado pétalo */}
        <defs>
          <linearGradient id="petalGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7B7B2" />
            <stop offset="60%" stopColor="#E8A6A1" />
            <stop offset="100%" stopColor="#FDFBF7" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}
