import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tulip from "./assets/tulip-watercolor.png";

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
      <motion.img
        src={tulip}
        alt="Tulip watercolor"
        width={180}
        height={180}
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={{
          opacity: [0, 1],
          scale: [0.8, 1.05, 1],
          rotate: [-3, 2, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
          userSelect: "none",
        }}
      />
    </motion.div>
  );
}
