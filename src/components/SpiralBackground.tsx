"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SpiralBackground() {
  const [spiralPath, setSpiralPath] = useState("");
  
  useEffect(() => {
    let path = "M 500 500 ";
    const turns = 12;
    const points = turns * 80;
    
    for (let i = 0; i <= points; i++) {
      const angle = (i / 80) * Math.PI * 2;
      const radius = 10 + i * 4;
      const x = 500 + radius * Math.cos(angle);
      const y = 500 + radius * Math.sin(angle);
      path += `L ${x.toFixed(2)} ${y.toFixed(2)} `;
    }
    
    setSpiralPath(path);
  }, []);

  const repeatingText = " code • design • create • zhangyang.dev • ".repeat(30);

  if (!spiralPath) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[-10] pointer-events-none">
      <motion.svg
        viewBox="0 0 1000 1000"
        className="w-[250vmax] h-[250vmax] opacity-50"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <path id="spiralPath" d={spiralPath} fill="none" />
        </defs>
        <text
          fill="#CCFF00"
          fontSize="32"
          fontFamily="var(--font-space-mono), monospace"
          fontWeight="bold"
        >
          <textPath href="#spiralPath">{repeatingText}</textPath>
        </text>
      </motion.svg>
    </div>
  );
}
