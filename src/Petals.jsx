import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Petals({ zIndex = 1, opacity = 0.7, blur = 1 }) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 10 }, () => ({
      startX: Math.random() * window.innerWidth,
      endX: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      scale: 0.6 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }));
    setPositions(newPetals);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex,
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
            opacity: [0, opacity, 0],
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
            width: "22px",
            height: "14px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(247,187,187,0.85) 0%, rgba(239,154,154,0.7) 60%, rgba(247,187,187,0.85) 100%)",
            borderRadius: "50% 60% 60% 40%",
            filter: `blur(${blur}px)`,
            opacity,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
