"use client";

import { motion } from "framer-motion";

function CoffeeMug() {
  return (
    <svg width="120" height="140" viewBox="0 0 160 180" fill="none">
      <ellipse cx="65" cy="40" rx="45" ry="10" fill="#3E2723" />
      <path d="M20 40 Q18 100 25 140 Q65 155 105 140 Q112 100 110 40" fill="#00BCD4" />
      <path d="M18 38 Q15 90 22 138 Q65 158 108 138 Q115 90 112 38" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="65" cy="38" rx="48" ry="12" stroke="black" strokeWidth="3" fill="none" />
      <path d="M108 50 Q135 45 145 70 Q150 105 140 125 Q125 142 108 135" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      <text x="35" y="85" fill="#1A237E" fontSize="18" fontFamily="monospace" fontWeight="bold">PROJ</text>
      <text x="35" y="108" fill="#1A237E" fontSize="18" fontFamily="monospace" fontWeight="bold">ECTS</text>
    </svg>
  );
}

function Notepad() {
  return (
    <svg width="90" height="110" viewBox="0 0 120 140" fill="none">
      <path d="M12 22 L108 18 L112 125 L8 130 Z" fill="#FF4081" />
      <path d="M8 16 Q60 10 112 18 Q116 70 114 120 L102 128 L90 118 L78 130 L66 120 L54 132 L42 122 L30 134 L18 124 L6 135 Q2 70 8 16" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="22" r="4" fill="black" />
      <circle cx="44" cy="20" r="4" fill="black" />
      <circle cx="66" cy="18" r="4" fill="black" />
      <circle cx="88" cy="19" r="4" fill="black" />
      <text x="25" y="60" fill="black" fontSize="14" fontFamily="monospace" fontWeight="bold">BLOG</text>
      <text x="20" y="82" fill="black" fontSize="11" fontFamily="monospace">COMING</text>
      <text x="30" y="100" fill="black" fontSize="11" fontFamily="monospace">SOON</text>
    </svg>
  );
}

function GithubSticker() {
  return (
    <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" fill="black" />
      <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="none" />
      <path d="M50 20 C30 20 20 35 20 50 C20 62 28 72 40 76 C42 76 43 75 43 73 L43 68 C32 70 30 63 30 63 C28 59 25 58 25 58 C21 55 25 55 25 55 C29 55 32 59 32 59 C36 65 42 63 44 62 C44 59 45 57 47 56 C38 55 28 52 28 42 C28 38 30 35 32 32 C32 31 30 27 33 22 C33 22 37 21 43 25 C46 24 50 24 54 24 C58 24 62 24 65 25 C71 21 75 22 75 22 C78 27 76 31 76 32 C78 35 80 38 80 42 C80 52 70 55 61 56 C63 58 65 61 65 65 L65 73 C65 75 66 76 68 76 C80 72 88 62 88 50 C88 35 78 20 50 20" fill="white" />
    </svg>
  );
}

function StarSticker() {
  return (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none">
      <path d="M40 5 L48 28 L72 28 L52 45 L60 70 L40 55 L20 70 L28 45 L8 28 L32 28 Z" fill="#FFEB3B" />
      <path d="M40 3 L49 27 L75 26 L54 44 L63 72 L40 56 L17 72 L26 44 L5 26 L31 27 Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function EmailSticker() {
  return (
    <svg width="140" height="40" viewBox="0 0 180 50" fill="none">
      <path d="M5 10 Q25 6 45 12 Q48 32 46 42 Q25 48 5 44 Q2 28 5 10" fill="white" />
      <path d="M3 8 Q25 3 48 10 Q52 30 50 46 Q25 52 3 48 Q-2 28 3 8" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M5 12 L25 26 L45 12" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="58" y="32" fill="black" fontSize="12" fontFamily="monospace" textDecoration="underline">hi@zhangyang.dev</text>
    </svg>
  );
}

export default function FloatingStickers() {
  return (
    <>
      {/* Desktop - fixed positions at screen edges */}
      <div className="hidden md:block">
        {/* Email - top left */}
        <motion.div
          className="fixed left-4 top-20 cursor-grab active:cursor-grabbing z-30"
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileDrag={{ scale: 1.1 }}
          style={{ rotate: -3 }}
        >
          <EmailSticker />
        </motion.div>

        {/* Notepad - right side top */}
        <motion.div
          className="fixed right-6 top-28 cursor-grab active:cursor-grabbing z-30"
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileDrag={{ scale: 1.1 }}
          style={{ rotate: 8 }}
        >
          <Notepad />
        </motion.div>

        {/* Coffee Mug - right side bottom */}
        <motion.div
          className="fixed right-6 bottom-24 cursor-grab active:cursor-grabbing z-30"
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileDrag={{ scale: 1.1 }}
          style={{ rotate: -5 }}
        >
          <CoffeeMug />
        </motion.div>

        {/* GitHub - left bottom */}
        <motion.div
          className="fixed left-24 bottom-28 cursor-grab active:cursor-grabbing z-30"
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.05, rotate: -8 }}
          whileDrag={{ scale: 1.1 }}
          style={{ rotate: 10 }}
        >
          <GithubSticker />
        </motion.div>

        {/* Star - top center-left */}
        <motion.div
          className="fixed left-[25%] top-20 cursor-grab active:cursor-grabbing z-30"
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.1, rotate: 20 }}
          whileDrag={{ scale: 1.15 }}
          style={{ rotate: 12 }}
        >
          <StarSticker />
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="flex gap-4 mt-8 md:hidden flex-wrap justify-center px-4">
        <motion.div style={{ rotate: 5 }} whileHover={{ scale: 1.05 }}>
          <Notepad />
        </motion.div>
        <motion.div style={{ rotate: -3 }} whileHover={{ scale: 1.05 }}>
          <CoffeeMug />
        </motion.div>
      </div>
    </>
  );
}
