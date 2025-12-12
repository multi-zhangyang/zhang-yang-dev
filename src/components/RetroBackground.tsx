"use client";

import { motion } from "framer-motion";

export default function RetroBackground() {
  return (
    <div className="fixed inset-0 z-[-15] pointer-events-none overflow-hidden">
      {/* Animated grid lines - like old paper */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#000" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating doodle elements */}
      {/* Stars */}
      <motion.svg
        className="absolute top-[10%] left-[20%] w-12 h-12"
        viewBox="0 0 50 50"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
      >
        <path d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z" stroke="#FF4081" strokeWidth="2" fill="none" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[20%] right-[15%] w-10 h-10"
        viewBox="0 0 50 50"
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
      >
        <path d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z" stroke="#FFEB3B" strokeWidth="2" fill="none" />
      </motion.svg>

      {/* Spiral doodles */}
      <motion.svg
        className="absolute top-[30%] right-[25%] w-16 h-16"
        viewBox="0 0 60 60"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <path d="M30 30 Q35 25 35 30 Q35 35 30 35 Q25 35 25 30 Q25 22 33 22 Q42 22 42 30 Q42 40 30 40 Q18 40 18 30 Q18 18 30 18" stroke="#2979FF" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[35%] left-[10%] w-14 h-14"
        viewBox="0 0 60 60"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <path d="M30 30 Q35 25 35 30 Q35 35 30 35 Q25 35 25 30 Q25 22 33 22 Q42 22 42 30 Q42 40 30 40 Q18 40 18 30 Q18 18 30 18" stroke="#CCFF00" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* Hearts */}
      <motion.svg
        className="absolute top-[60%] left-[25%] w-8 h-8"
        viewBox="0 0 40 40"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M20 35 Q5 20 10 10 Q15 5 20 12 Q25 5 30 10 Q35 20 20 35" stroke="#FF4081" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute top-[15%] right-[30%] w-6 h-6"
        viewBox="0 0 40 40"
        animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <path d="M20 35 Q5 20 10 10 Q15 5 20 12 Q25 5 30 10 Q35 20 20 35" stroke="#00BCD4" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* Lightning bolts */}
      <motion.svg
        className="absolute bottom-[15%] left-[35%] w-10 h-14"
        viewBox="0 0 40 60"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path d="M25 5 L10 30 L20 30 L15 55 L35 25 L22 25 Z" stroke="#FFEB3B" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </motion.svg>

      {/* Arrows */}
      <motion.svg
        className="absolute top-[45%] right-[8%] w-12 h-8"
        viewBox="0 0 60 40"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M5 20 L45 20 M35 10 L50 20 L35 30" stroke="#2979FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[40%] left-[5%] w-10 h-8"
        viewBox="0 0 60 40"
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M55 20 L15 20 M25 10 L10 20 L25 30" stroke="#FF4081" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      {/* Exclamation marks */}
      <motion.svg
        className="absolute top-[70%] right-[20%] w-6 h-12"
        viewBox="0 0 20 50"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <path d="M10 5 L10 30" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round" />
        <circle cx="10" cy="42" r="4" fill="#CCFF00" />
      </motion.svg>

      {/* Question marks */}
      <motion.svg
        className="absolute top-[25%] left-[8%] w-8 h-12"
        viewBox="0 0 30 50"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path d="M8 15 Q8 5 15 5 Q25 5 25 15 Q25 22 15 25 L15 32" stroke="#00BCD4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="15" cy="42" r="3" fill="#00BCD4" />
      </motion.svg>

      {/* Wavy lines */}
      <motion.svg
        className="absolute bottom-[8%] right-[40%] w-24 h-6"
        viewBox="0 0 100 30"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path d="M5 15 Q20 5 35 15 Q50 25 65 15 Q80 5 95 15" stroke="#FF4081" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute top-[5%] left-[40%] w-20 h-6"
        viewBox="0 0 100 30"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <path d="M5 15 Q20 5 35 15 Q50 25 65 15 Q80 5 95 15" stroke="#CCFF00" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* Circles/bubbles */}
      <motion.div
        className="absolute top-[50%] left-[45%] w-4 h-4 rounded-full border-2 border-[#2979FF]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[35%] left-[55%] w-3 h-3 rounded-full border-2 border-[#FF4081]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[35%] w-5 h-5 rounded-full border-2 border-[#FFEB3B]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />

      {/* Cross/X marks */}
      <motion.svg
        className="absolute top-[80%] left-[15%] w-6 h-6"
        viewBox="0 0 30 30"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path d="M5 5 L25 25 M25 5 L5 25" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[60%] right-[5%] w-5 h-5"
        viewBox="0 0 30 30"
        animate={{ rotate: [0, -90, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <path d="M5 5 L25 25 M25 5 L5 25" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
}
