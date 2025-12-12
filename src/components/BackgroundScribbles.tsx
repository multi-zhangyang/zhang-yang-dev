"use client";

import { motion } from "framer-motion";

export default function BackgroundScribbles() {
  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none overflow-hidden">
      {/* Big green swoosh - right side */}
      <motion.svg
        className="absolute -right-10 top-0 h-full w-80"
        viewBox="0 0 200 600"
        fill="none"
        animate={{ x: [0, 8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M150 0 Q200 100 180 200 Q140 300 170 400 Q200 500 160 600" stroke="#CCFF00" strokeWidth="80" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M120 50 Q180 150 150 250 Q110 350 140 450 Q180 550 130 650" stroke="#CCFF00" strokeWidth="50" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M100 100 Q160 180 130 280 Q90 380 120 480 Q160 580 110 680" stroke="#CCFF00" strokeWidth="30" strokeLinecap="round" fill="none" opacity="0.4" />
      </motion.svg>

      {/* Left side green swoosh */}
      <motion.svg
        className="absolute -left-10 top-[20%] h-[60%] w-60"
        viewBox="0 0 150 400"
        fill="none"
        animate={{ x: [0, -5, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M20 0 Q-20 100 30 200 Q80 300 20 400" stroke="#CCFF00" strokeWidth="60" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M40 30 Q0 130 50 230 Q100 330 40 430" stroke="#CCFF00" strokeWidth="35" strokeLinecap="round" fill="none" opacity="0.4" />
      </motion.svg>

      {/* Cyan scribble circles - bottom right */}
      <motion.svg
        className="absolute right-[5%] bottom-[5%] w-96 h-96"
        viewBox="0 0 300 300"
        fill="none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <path d="M150 20 Q280 50 270 150 Q260 250 150 280 Q40 260 30 150 Q20 50 150 20" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M150 40 Q260 65 250 150 Q240 235 150 260 Q60 240 50 150 Q40 65 150 40" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M150 60 Q240 80 230 150 Q220 220 150 240 Q80 220 70 150 Q60 80 150 60" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M150 80 Q220 95 210 150 Q200 205 150 220 Q100 200 90 150 Q80 95 150 80" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.2" />
      </motion.svg>

      {/* Top left cyan circles */}
      <motion.svg
        className="absolute left-[2%] top-[5%] w-72 h-72"
        viewBox="0 0 200 200"
        fill="none"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <path d="M100 15 Q180 30 175 100 Q170 170 100 185 Q30 170 25 100 Q20 30 100 15" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M100 35 Q160 48 155 100 Q150 152 100 165 Q50 150 45 100 Q40 48 100 35" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3" />
      </motion.svg>

      {/* Blue dashes - scattered */}
      <svg className="absolute left-[3%] top-[35%] w-20 h-10" viewBox="0 0 80 40">
        <path d="M5 20 L75 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute left-[6%] top-[40%] w-16 h-10" viewBox="0 0 80 40">
        <path d="M5 20 L65 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
      </svg>
      <svg className="absolute left-[2%] top-[45%] w-14 h-10" viewBox="0 0 80 40">
        <path d="M5 20 L55 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
      </svg>
      
      <svg className="absolute right-[20%] bottom-[20%] w-20 h-10 rotate-45" viewBox="0 0 80 40">
        <path d="M5 20 L75 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute right-[23%] bottom-[25%] w-16 h-10 rotate-45" viewBox="0 0 80 40">
        <path d="M5 20 L65 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
      </svg>
      <svg className="absolute right-[18%] bottom-[30%] w-14 h-10 rotate-45" viewBox="0 0 80 40">
        <path d="M5 20 L55 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Bottom left blue dashes */}
      <svg className="absolute left-[8%] bottom-[8%] w-20 h-10 -rotate-12" viewBox="0 0 80 40">
        <path d="M5 20 L75 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
      </svg>
      <svg className="absolute left-[11%] bottom-[13%] w-16 h-10 -rotate-12" viewBox="0 0 80 40">
        <path d="M5 20 L65 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
      </svg>
      <svg className="absolute left-[6%] bottom-[18%] w-14 h-10 -rotate-12" viewBox="0 0 80 40">
        <path d="M5 20 L55 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Top right blue dashes */}
      <svg className="absolute right-[5%] top-[30%] w-20 h-10 rotate-[30deg]" viewBox="0 0 80 40">
        <path d="M5 20 L75 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
      </svg>
      <svg className="absolute right-[8%] top-[35%] w-16 h-10 rotate-[30deg]" viewBox="0 0 80 40">
        <path d="M5 20 L65 20" stroke="#2979FF" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Pink zigzag lines */}
      <motion.svg
        className="absolute left-[15%] bottom-[35%] w-32 h-16"
        viewBox="0 0 120 60"
        fill="none"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path d="M5 30 L25 10 L45 50 L65 10 L85 50 L105 30" stroke="#FF4081" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      </motion.svg>

      <motion.svg
        className="absolute right-[30%] top-[15%] w-28 h-14"
        viewBox="0 0 120 60"
        fill="none"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path d="M5 30 L25 10 L45 50 L65 10 L85 50 L105 30" stroke="#FF4081" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      </motion.svg>

      {/* Yellow dots scattered */}
      <svg className="absolute left-[25%] top-[10%] w-4 h-4">
        <circle cx="8" cy="8" r="6" fill="#FFEB3B" opacity="0.7" />
      </svg>
      <svg className="absolute left-[30%] top-[8%] w-3 h-3">
        <circle cx="6" cy="6" r="5" fill="#FFEB3B" opacity="0.6" />
      </svg>
      <svg className="absolute right-[35%] bottom-[12%] w-4 h-4">
        <circle cx="8" cy="8" r="6" fill="#FFEB3B" opacity="0.7" />
      </svg>
      <svg className="absolute right-[40%] bottom-[8%] w-3 h-3">
        <circle cx="6" cy="6" r="5" fill="#FFEB3B" opacity="0.6" />
      </svg>
      <svg className="absolute left-[45%] bottom-[5%] w-5 h-5">
        <circle cx="10" cy="10" r="8" fill="#FFEB3B" opacity="0.5" />
      </svg>
    </div>
  );
}
