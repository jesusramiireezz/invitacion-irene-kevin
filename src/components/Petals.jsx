import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Petals.css";

export default function Petals({ zIndex = 1, opacity = 0.7, blur = 1 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 10 }, () => ({
        startX: Math.random() * window.innerWidth,
        endX: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        scale: 0.6 + Math.random() * 0.8,
        rotation: Math.random() * 360,
      }))
    );
  }, []);

  return (
    <div className="petals-wrapper" style={{ zIndex }}>
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="petal"
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
            filter: `blur(${blur}px)`,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
