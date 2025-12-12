"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fake visitor count animation
    const target = 1337 + Math.floor(Math.random() * 100);
    let current = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 5 }}
      transition={{ delay: 1.5, type: "spring" }}
    >
      <svg width="140" height="60" viewBox="0 0 140 60" fill="none">
        {/* Shadow */}
        <path d="M12 10 Q70 4 128 12 Q135 32 132 52 Q70 58 10 54 Q4 32 12 10" fill="#FF4081" opacity="0.5" />
        {/* Background */}
        <path d="M8 6 Q70 0 132 8 Q140 30 136 52 Q70 60 6 54 Q0 30 8 6" fill="white" />
        {/* Border */}
        <path d="M6 4 Q70 -3 134 6 Q143 30 138 54 Q70 64 4 56 Q-4 30 6 4" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <Eye size={18} className="text-gray-600" />
        <span className="font-mono text-lg font-bold">{count.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}
