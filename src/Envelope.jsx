import { motion } from "framer-motion";

export default function Envelope() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transformOrigin: "center",
      }}
    >
      <motion.svg
        width="320"
        height="220"
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degradado base del sobre */}
          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E9DCC4" />
            <stop offset="100%" stopColor="#E0CDAA" />
          </linearGradient>

          {/* Degradado para la solapa */}
          <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EEDFC2" />
            <stop offset="100%" stopColor="#D9C097" />
          </linearGradient>

          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#b49c70" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Cuerpo del sobre */}
        <motion.rect
          x="40"
          y="80"
          width="240"
          height="120"
          rx="8"
          fill="url(#baseGrad)"
          stroke="#C3AD80"
          strokeWidth="2"
          filter="url(#shadow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Solapa superior animada */}
        <motion.path
          d="M40 80 L160 20 L280 80 Z"
          fill="url(#flapGrad)"
          stroke="#C3AD80"
          strokeWidth="2"
          initial={{ rotateX: 0, transformOrigin: "bottom" }}
          animate={{ rotateX: 180 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Interior del sobre (pliegue) */}
        <motion.path
          d="M40 80 L160 160 L280 80"
          stroke="#CDB88C"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />

        {/* Tarjeta interior blanca */}
        <motion.rect
          x="60"
          y="110"
          width="200"
          height="90"
          rx="6"
          fill="#FFFFFF"
          stroke="#E6D9BA"
          strokeWidth="1.5"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.2, ease: "easeOut" }}
        />

        {/* Texto en la tarjeta */}
        <motion.text
          x="160"
          y="160"
          textAnchor="middle"
          fill="#9B8B65"
          fontFamily="Playfair Display, serif"
          fontSize="20"
          opacity="0"
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
        >
          Irene & Kevin
        </motion.text>
      </motion.svg>
    </motion.div>
  );
}
