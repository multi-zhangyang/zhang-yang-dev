"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Clock({ inline = false }: { inline?: boolean }) {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
      setDate(now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={inline ? "relative" : "fixed top-14 right-6 z-50"}
      initial={{ y: inline ? 0 : -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: inline ? 0 : 0.5 }}
    >
      <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
        {/* Shadow */}
        <path d="M12 10 Q80 4 148 12 Q155 42 152 72 Q80 78 10 74 Q4 42 12 10" fill="#00BCD4" opacity="0.5" />
        {/* Background */}
        <path d="M8 6 Q80 0 152 8 Q160 40 156 70 Q80 78 6 72 Q0 40 8 6" fill="#1a1a1a" />
        {/* Border */}
        <path d="M6 4 Q80 -3 154 6 Q163 40 158 72 Q80 82 4 74 Q-4 40 6 4" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-mono text-white font-bold">{time}</span>
        <span className="text-xs font-mono text-gray-400">{date}</span>
      </div>
    </motion.div>
  );
}
