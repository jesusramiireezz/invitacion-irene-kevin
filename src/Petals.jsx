import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Petals() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Generamos posiciones aleatorias iniciales
    const newPetals = Array.from({ length: 10 }, () => ({
      startX: Math.random() * window.innerWidth,
      endX: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 8,
      scale: 0.6 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }));
    setPositions(newPetals);
  }, []); // solo una vez

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {positions.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            x: p.startX,
            y: -40,
            opacity: 0,
            scale: p.scale,
            rotate: p.rotation,
          }}
          animate={{
            y: [0, window.innerHeight + 40],
            x: [p.startX, p.endX],
            opacity: [0, 0.8, 0],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "28px",
            height: "18px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(247,187,187,0.9) 0%, rgba(239,154,154,0.7) 60%, rgba(247,187,187,0.9) 100%)",
            borderRadius: "50% 60% 60% 40%",
            filter: "blur(0.6px)",
            opacity: 0.7,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
