"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Bouncing emoji that follows a path
function BouncingEmoji() {
  const emojis = ["🚀", "⭐", "💡", "🎨", "🔥", "✨"];
  const [currentEmoji, setCurrentEmoji] = useState(0);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 text-3xl cursor-pointer z-40"
      animate={{
        x: [-200, 0, 200, 0, -200],
        y: [0, -30, 0, -30, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      onClick={() => setCurrentEmoji((prev) => (prev + 1) % emojis.length)}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.8, rotate: 360 }}
    >
      {emojis[currentEmoji]}
    </motion.div>
  );
}

// Typing indicator dots
function TypingDots() {
  return (
    <motion.div
      className="fixed top-20 left-1/2 -translate-x-1/2 flex gap-1 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div className="bg-white px-4 py-2 rounded-full border-2 border-black flex gap-1 items-center shadow-lg">
        <span className="text-xs font-mono mr-2">coding</span>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-black rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Floating tags
function FloatingTags() {
  const tags = [
    { text: "React", color: "#61DAFB", x: "75%", y: "20%" },
    { text: "TypeScript", color: "#3178C6", x: "80%", y: "60%" },
    { text: "Next.js", color: "#000", x: "18%", y: "65%" },
    { text: "CSS", color: "#FF4081", x: "12%", y: "30%" },
  ];

  return (
    <>
      {tags.map((tag, i) => (
        <motion.div
          key={tag.text}
          className="fixed z-20 px-3 py-1 rounded-full text-xs font-mono font-bold border-2 border-black shadow-md cursor-default"
          style={{ left: tag.x, top: tag.y, backgroundColor: tag.color, color: tag.color === "#000" ? "#fff" : "#000" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ delay: 1 + i * 0.3, y: { duration: 3, repeat: Infinity, delay: i * 0.5 } }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {tag.text}
        </motion.div>
      ))}
    </>
  );
}

// Cursor trail sparkles on click
function InteractiveHint() {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-xs font-mono text-gray-400 flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
    >
      <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
        👆
      </motion.span>
      click anywhere for magic
      <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>
        ✨
      </motion.span>
    </motion.div>
  );
}

// Animated border around viewport
function AnimatedBorder() {
  return (
    <div className="fixed inset-2 pointer-events-none z-10">
      <svg className="w-full h-full">
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="4"
          strokeDasharray="20 10"
          rx="20"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4081" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#FFEB3B" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.3" />
            <stop offset="75%" stopColor="#CCFF00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2979FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Combine all fun elements
export default function FunElements() {
  return (
    <>
      <BouncingEmoji />
      <TypingDots />
      <FloatingTags />
      <InteractiveHint />
      <AnimatedBorder />
    </>
  );
}
