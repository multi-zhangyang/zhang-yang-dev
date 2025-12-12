"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WiggleContainerProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function WiggleContainer({
  children,
  className = "",
  color = "white",
}: WiggleContainerProps) {
  return (
    <motion.div
      className={`doodle-border ${className}`}
      style={{ backgroundColor: color }}
      animate={{
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        ease: "linear",
      }}
      whileHover={{
        scale: 1.05,
        rotate: [-2, 2, -2],
        transition: {
          rotate: {
            duration: 0.2,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
