import React from "react";
import { motion } from "framer-motion";

// NAVIO Card component
// Props:
// - title: string
// - content: string
// - type: "default" | "info" | "alert"
export default function Card({ title = "", content = "", type = "default" }) {
  const variants = {
    default: {
      bg: "bg-card-dark",
      text: "text-navio-cream",
      shadow: "shadow-lg",
      glow: "shadow-[0_0_24px_rgba(210,193,182,0.06)]",
    },
    info: {
      bg: "bg-navio-blue",
      text: "text-white",
      shadow: "shadow-md",
      glow: "shadow-[0_0_24px_rgba(35,76,106,0.35)]",
    },
    alert: {
      bg: "bg-navio-light-blue",
      text: "text-white",
      shadow: "shadow-md",
      glow: "shadow-[0_0_24px_rgba(69,104,130,0.35)]",
    },
  };

  const { bg, text, shadow, glow } = variants[type] || variants.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={[
        "rounded-2xl p-5 min-w-[240px] w-full max-w-sm",
        "ring-1 ring-white/10",
        bg,
        text,
        shadow,
        glow,
      ].join(" ")}
    >
      <h3 className="text-lg font-extrabold tracking-wide mb-2">{title}</h3>
      <p className="text-sm/6 opacity-90">{content}</p>
    </motion.div>
  );
}

