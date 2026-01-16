import { motion } from "framer-motion";
import tulip from "../assets/tulip-watercolor.png";
import "./TulipLoader.css";

export default function TulipLoader() {
  return (
    <motion.div
      className="tulip-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }} 
    >
      <motion.img
        src={tulip}
        alt="Tulip watercolor"
        className="tulip-img"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, y: -8 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </motion.div>
  );
}
