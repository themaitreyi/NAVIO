import React from "react";
import { motion } from "framer-motion";

// Reusable NAVIO Alert component
// Props:
// - message: string
// - type: "warning" | "info" | "success"
export default function Alert({ message = "", type = "info" }) {
  const palette = {
    warning: {
      bg: "bg-navio-light-blue",
      text: "text-white",
    },
    info: {
      bg: "bg-navio-blue",
      text: "text-white",
    },
    success: {
      bg: "bg-navio-dark",
      text: "text-white",
    },
  };

  const { bg, text } = palette[type] || palette.info;

  return (
    <motion.div
      role="alert"
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.8 }}
      className={[
        bg,
        text,
        "mx-auto w-full max-w-xl select-none rounded-2xl px-5 py-4 text-center shadow-xl",
        "ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      ].join(" ")}
    >
      <p className="text-sm sm:text-base tracking-wide font-semibold">{message}</p>
    </motion.div>
  );
}

