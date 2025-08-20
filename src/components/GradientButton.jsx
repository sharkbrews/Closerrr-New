import React, { memo } from "react";
import { motion } from "framer-motion";

const GradientButton = memo(({
  children,
  onClick,
  width = "w-64 sm:w-44",
  height = "h-12 sm:h-14",
  textColor = "text-white",
  gradientFrom = "from-customPurple-500",
  gradientTo = "to-customPurple-500",
  fontClass = "font-hellix-bold",
  className = "",
  textSize = "text-xl",
  hoverScale = 1.02,
  tapScale = 0.98,
  // hoverShadow = "shadow-lg shadow-blue-500/20"
}) => (
  <motion.div
    onClick={onClick}
    style={{ cursor: "pointer" }}
    className={`relative flex items-center justify-center bg-gradient-to-r ${gradientFrom} ${gradientTo} ${width} ${height} rounded-xl ${textColor} text-sm sm:text-base group overflow-hidden transform-gpu ${fontClass}  ${className}`}
    whileHover={{ scale: hoverScale }}
    whileTap={{ scale: tapScale }}
    transition={{ duration: 0.2 }}
  >
    <span className={`relative z-10 ${textSize}`}>{children}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-customPink-500/20 to-purple-400/20"
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
));

export default GradientButton;
