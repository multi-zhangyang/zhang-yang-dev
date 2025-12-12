"use client";

import { motion } from "framer-motion";

const shapes = [
  { type: "circle", x: "3%", y: "20%", size: 50, color: "#FF4081", delay: 0 },
  { type: "circle", x: "92%", y: "15%", size: 35, color: "#FFEB3B", delay: 0.5 },
  { type: "circle", x: "95%", y: "75%", size: 60, color: "#2979FF", delay: 1 },
  { type: "circle", x: "5%", y: "80%", size: 40, color: "#00BCD4", delay: 1.5 },
  { type: "square", x: "8%", y: "50%", size: 30, color: "#CCFF00", delay: 0.3 },
  { type: "triangle", x: "90%", y: "50%", size: 35, color: "#FFEB3B", delay: 0.6 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: shape.delay },
            scale: { duration: 4, repeat: Infinity, delay: shape.delay },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, delay: shape.delay },
          }}
        >
          <Shape type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  );
}

function Shape({ type, size, color }: { type: string; size: number; color: string }) {
  if (type === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill={color} opacity="0.5" />
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  
  if (type === "square") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path d="M10 15 Q50 8 90 12 Q95 50 92 88 Q50 95 12 90 Q8 50 10 15" fill={color} opacity="0.5" />
        <path d="M10 15 Q50 8 90 12 Q95 50 92 88 Q50 95 12 90 Q8 50 10 15" stroke="black" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  
  if (type === "triangle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path d="M50 10 L90 85 L10 85 Z" fill={color} opacity="0.5" />
        <path d="M50 8 L92 88 L8 88 Z" stroke="black" strokeWidth="3" fill="none" strokeLinejoin="round" />
      </svg>
    );
  }
  
  return null;
}
