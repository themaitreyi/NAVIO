import React from "react";
import { motion } from "framer-motion";

// NAVIO Button component
// Props:
// - children: ReactNode (button label/content)
// - onClick: () => void
// - type: "primary" | "secondary" | "danger"
export default function Button({ children, onClick, type = "primary" }) {
  const palette = {
    primary: {
      bg: "bg-navio-blue",
      text: "text-white",
      glow: "shadow-[0_0_20px_rgba(35,76,106,0.3)]",
    },
    secondary: {
      bg: "bg-navio-light-blue",
      text: "text-white",
      glow: "shadow-[0_0_20px_rgba(69,104,130,0.3)]",
    },
    danger: {
      bg: "bg-navio-dark",
      text: "text-white",
      glow: "shadow-[0_0_20px_rgba(27,60,83,0.3)]",
    },
  };

  const { bg, text, glow } = palette[type] || palette.primary;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={[
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-bold",
        "shadow-lg ring-1 ring-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        bg,
        text,
        glow,
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
}

