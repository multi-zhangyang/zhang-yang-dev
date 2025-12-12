"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// 漫画分格边框
function ComicPanelBorders() {
  return (
    <div className="fixed inset-4 pointer-events-none z-5">
      <svg className="w-full h-full">
        <defs>
          <filter id="roughEdge">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs>
        
        {/* 主边框 - 手绘风格 */}
        <motion.rect
          x="1%"
          y="1%"
          width="98%"
          height="98%"
          fill="none"
          stroke="black"
          strokeWidth="4"
          rx="8"
          strokeDasharray="0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* 内层装饰线 */}
        <rect
          x="2%"
          y="2%"
          width="96%"
          height="96%"
          fill="none"
          stroke="black"
          strokeWidth="1"
          strokeDasharray="8 4"
          rx="6"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

// 动态漫画速度线
function SpeedLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-3 overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const angle = -30 + (i * 3);
        return (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent"
            style={{
              width: 200 + (i % 5) * 100,
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              x: [-100, 100],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}

// 半调网点效果
function HalftonePattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-2 opacity-[0.03]">
      <svg className="w-full h-full">
        <defs>
          <pattern id="halftone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill="black" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>
    </div>
  );
}

// 爆炸效果背景
function ExplosionBurst() {
  const bursts = [
    { x: "10%", y: "20%", size: 150, color: "#FF4081" },
    { x: "85%", y: "15%", size: 120, color: "#FFEB3B" },
    { x: "75%", y: "70%", size: 100, color: "#00BCD4" },
  ];

  return (
    <>
      {bursts.map((burst, i) => (
        <motion.svg
          key={i}
          className="fixed pointer-events-none z-3"
          style={{ left: burst.x, top: burst.y, width: burst.size, height: burst.size }}
          viewBox="0 0 100 100"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ delay: i * 0.3, duration: 0.5 }}
        >
          <path
            d="M50 5 L55 35 L85 25 L65 45 L95 50 L65 55 L85 75 L55 65 L50 95 L45 65 L15 75 L35 55 L5 50 L35 45 L15 25 L45 35 Z"
            fill={burst.color}
            opacity="0.15"
            stroke={burst.color}
            strokeWidth="2"
          />
        </motion.svg>
      ))}
    </>
  );
}

// 漫画风格标签
function ComicLabels() {
  const labels = [
    { text: "MULTI", x: "5%", y: "5%", bg: "#FF4081" },
    { text: "ZHANG", x: "82%", y: "5%", bg: "#00BCD4" },
    { text: "YANG", x: "88%", y: "92%", bg: "#CCFF00" },
    { text: "DEV", x: "3%", y: "92%", bg: "#FFEB3B" },
  ];

  return (
    <>
      {labels.map((label, i) => (
        <motion.div
          key={label.text}
          className="fixed z-20 px-3 py-1 font-black text-sm tracking-wider pointer-events-none"
          style={{
            left: label.x,
            top: label.y,
            backgroundColor: label.bg,
            color: label.bg === "#FFEB3B" || label.bg === "#CCFF00" ? "#000" : "#fff",
            transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 3}deg)`,
            boxShadow: "3px 3px 0 #000",
            border: "2px solid #000",
          }}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: (i % 2 === 0 ? -1 : 1) * 3 }}
          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
        >
          {label.text}
        </motion.div>
      ))}
    </>
  );
}

// 手绘涂鸦元素
function DoodleElements() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-5">
      {/* 手绘星星 */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "15% 30%" }}
      >
        <path
          d="M100 180 L105 195 L120 195 L108 205 L113 220 L100 210 L87 220 L92 205 L80 195 L95 195 Z"
          fill="none"
          stroke="#FF4081"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* 手绘心形 */}
      <path
        d="M880 400 Q880 380 860 380 Q840 380 840 400 Q840 420 880 450 Q920 420 920 400 Q920 380 900 380 Q880 380 880 400"
        fill="none"
        stroke="#FF4081"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* 手绘闪电 */}
      <motion.path
        d="M150 450 L165 470 L155 470 L170 500 L160 480 L170 480 L150 450"
        fill="#FFEB3B"
        stroke="#000"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />

      {/* 螺旋线 */}
      <motion.path
        d="M800 150 Q820 150 820 170 Q820 190 800 190 Q780 190 780 210 Q780 230 800 230"
        fill="none"
        stroke="#00BCD4"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* 波浪线 */}
      <path
        d="M50 550 Q70 530 90 550 Q110 570 130 550 Q150 530 170 550"
        fill="none"
        stroke="#9C27B0"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

// 随机飞行的漫画元素
function FlyingComicElements() {
  const [elements, setElements] = useState<Array<{ id: number; emoji: string; x: number; y: number }>>([]);

  useEffect(() => {
    const emojis = ["💥", "⚡", "✨", "🌟", "💫", "🔥", "💢", "💦"];
    const interval = setInterval(() => {
      if (elements.length < 8) {
        setElements((prev) => [
          ...prev,
          {
            id: Date.now(),
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
          },
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [elements.length]);

  useEffect(() => {
    if (elements.length > 0) {
      const timeout = setTimeout(() => {
        setElements((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [elements]);

  return (
    <>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="fixed text-2xl pointer-events-none z-30"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: [0, 1.5, 1, 0], rotate: [0, 360] }}
          transition={{ duration: 3 }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </>
  );
}

// 墨水滴落效果
function InkDrops() {
  const drops = [
    { x: "20%", y: "10%", size: 30 },
    { x: "70%", y: "85%", size: 25 },
    { x: "90%", y: "45%", size: 20 },
  ];

  return (
    <>
      {drops.map((drop, i) => (
        <motion.svg
          key={i}
          className="fixed pointer-events-none z-5"
          style={{ left: drop.x, top: drop.y, width: drop.size, height: drop.size * 1.5 }}
          viewBox="0 0 30 45"
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.5, type: "spring" }}
        >
          <path
            d="M15 5 Q25 20 25 30 Q25 42 15 42 Q5 42 5 30 Q5 20 15 5"
            fill="#000"
            opacity="0.1"
          />
        </motion.svg>
      ))}
    </>
  );
}

export default function ComicElements() {
  return (
    <>
      <HalftonePattern />
      <SpeedLines />
      <ComicPanelBorders />
      <ExplosionBurst />
      <ComicLabels />
      <DoodleElements />
      <FlyingComicElements />
      <InkDrops />
    </>
  );
}
