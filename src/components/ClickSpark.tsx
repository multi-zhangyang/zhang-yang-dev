"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark: Spark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparks((prev) => [...prev, newSpark]);
      
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const colors = ["#FFEB3B", "#FF4081", "#2979FF", "#CCFF00", "#00BCD4"];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <div key={spark.id} style={{ position: "absolute", left: spark.x, top: spark.y }}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i % colors.length] }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 50,
                  y: Math.sin((i * Math.PI * 2) / 8) * 50,
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
            {/* Center burst */}
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-white"
              style={{ x: "-50%", y: "-50%" }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
