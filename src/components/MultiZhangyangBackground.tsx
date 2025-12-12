"use client";

import { motion } from "framer-motion";

// 漫画拟声词组件
function ComicSoundEffects() {
  const sounds = [
    { text: "BOOM!", x: "5%", y: "15%", color: "#FF4081", rotate: -12, size: "text-4xl" },
    { text: "ZAP!", x: "85%", y: "35%", color: "#FFEB3B", rotate: 15, size: "text-3xl" },
    { text: "WHOOSH!", x: "8%", y: "70%", color: "#00BCD4", rotate: -8, size: "text-2xl" },
    { text: "POW!", x: "75%", y: "75%", color: "#CCFF00", rotate: 10, size: "text-3xl" },
    { text: "CRASH!", x: "15%", y: "45%", color: "#2979FF", rotate: -5, size: "text-2xl" },
    { text: "SPLAT!", x: "70%", y: "12%", color: "#9C27B0", rotate: 8, size: "text-2xl" },
    { text: "ZOOM!", x: "45%", y: "8%", color: "#FF5722", rotate: -3, size: "text-xl" },
    { text: "WHAM!", x: "88%", y: "60%", color: "#E91E63", rotate: 12, size: "text-2xl" },
  ];

  return (
    <>
      {sounds.map((sound, i) => (
        <motion.div
          key={sound.text}
          className={`fixed ${sound.size} font-black z-10 pointer-events-none select-none`}
          style={{
            left: sound.x,
            top: sound.y,
            color: sound.color,
            rotate: `${sound.rotate}deg`,
            textShadow: `3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000`,
            fontFamily: "Impact, sans-serif",
            WebkitTextStroke: "2px black",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.3, 1],
            opacity: [0, 1, 0.7],
          }}
          transition={{ delay: i * 0.3, duration: 0.5 }}
        >
          {sound.text}
        </motion.div>
      ))}
    </>
  );
}

// 对话气泡
function SpeechBubbles() {
  const bubbles = [
    { text: "Hello World!", x: "3%", y: "25%", type: "speech" },
    { text: "创意无限!", x: "80%", y: "20%", type: "thought" },
    { text: "< code />", x: "5%", y: "55%", type: "speech" },
    { text: "ART!", x: "85%", y: "85%", type: "shout" },
  ];

  return (
    <>
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="fixed z-10 pointer-events-none"
          style={{ left: bubble.x, top: bubble.y }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -5, 0] }}
          transition={{ delay: 0.5 + i * 0.2, y: { duration: 2, repeat: Infinity } }}
        >
          <svg width="120" height="80" viewBox="0 0 120 80">
            {bubble.type === "speech" && (
              <>
                <path
                  d="M10 10 Q5 10 5 20 L5 50 Q5 60 15 60 L25 60 L20 75 L35 60 L105 60 Q115 60 115 50 L115 20 Q115 10 105 10 Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                />
              </>
            )}
            {bubble.type === "thought" && (
              <>
                <ellipse cx="60" cy="35" rx="55" ry="30" fill="white" stroke="black" strokeWidth="3" />
                <circle cx="25" cy="65" r="8" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="15" cy="75" r="5" fill="white" stroke="black" strokeWidth="2" />
              </>
            )}
            {bubble.type === "shout" && (
              <path
                d="M60 5 L75 20 L95 15 L85 35 L110 45 L80 55 L85 75 L60 60 L35 75 L40 55 L10 45 L35 35 L25 15 L45 20 Z"
                fill="#FFEB3B"
                stroke="black"
                strokeWidth="3"
              />
            )}
            <text
              x="60"
              y={bubble.type === "shout" ? "45" : "40"}
              textAnchor="middle"
              className="text-xs font-bold"
              fill="black"
            >
              {bubble.text}
            </text>
          </svg>
        </motion.div>
      ))}
    </>
  );
}

// 水彩泼墨效果
function WatercolorSplashes() {
  const splashes = [
    { x: "0%", y: "0%", color: "#FF408140", size: 400, blur: 60 },
    { x: "70%", y: "-10%", color: "#00BCD430", size: 350, blur: 50 },
    { x: "-5%", y: "60%", color: "#FFEB3B30", size: 300, blur: 45 },
    { x: "80%", y: "50%", color: "#9C27B025", size: 380, blur: 55 },
    { x: "40%", y: "80%", color: "#CCFF0020", size: 320, blur: 50 },
  ];

  return (
    <>
      {splashes.map((splash, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none"
          style={{
            left: splash.x,
            top: splash.y,
            width: splash.size,
            height: splash.size,
            background: `radial-gradient(ellipse at ${30 + i * 10}% ${40 + i * 5}%, ${splash.color} 0%, transparent 70%)`,
            filter: `blur(${splash.blur}px)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

// 赛博朋克霓虹线条
function CyberpunkLines() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-5">
      {/* 霓虹网格 */}
      <defs>
        <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4081" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF4081" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="neonCyan" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00BCD4" stopOpacity="0" />
          <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00BCD4" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 水平霓虹线 */}
      {[15, 85].map((y, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0%"
          y1={`${y}%`}
          x2="100%"
          y2={`${y}%`}
          stroke="url(#neonPink)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.3 }}
        />
      ))}

      {/* 垂直霓虹线 */}
      {[10, 90].map((x, i) => (
        <motion.line
          key={`v-${i}`}
          x1={`${x}%`}
          y1="0%"
          x2={`${x}%`}
          y2="100%"
          stroke="url(#neonCyan)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 + i * 0.3 }}
        />
      ))}

      {/* 对角线 */}
      <motion.line
        x1="0%"
        y1="100%"
        x2="30%"
        y2="70%"
        stroke="#CCFF00"
        strokeWidth="3"
        strokeDasharray="10 5"
        filter="url(#glow)"
        animate={{ strokeDashoffset: [0, -30] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.line
        x1="100%"
        y1="0%"
        x2="70%"
        y2="30%"
        stroke="#CCFF00"
        strokeWidth="3"
        strokeDasharray="10 5"
        filter="url(#glow)"
        animate={{ strokeDashoffset: [0, -30] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

// 中世纪手稿装饰边框
function MedievalBorders() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* 角落装饰 */}
      <svg className="absolute top-2 left-2 w-24 h-24" viewBox="0 0 100 100">
        <path
          d="M5 50 Q5 5 50 5 M5 50 L5 95 M5 95 L50 95"
          stroke="#8B4513"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="5" cy="50" r="6" fill="#DAA520" stroke="#8B4513" strokeWidth="2" />
        <path d="M15 15 Q25 10 35 15 Q30 25 35 35 Q25 30 15 35 Q20 25 15 15" fill="#DAA520" opacity="0.6" />
      </svg>

      <svg className="absolute top-2 right-2 w-24 h-24 rotate-90" viewBox="0 0 100 100">
        <path
          d="M5 50 Q5 5 50 5 M5 50 L5 95 M5 95 L50 95"
          stroke="#8B4513"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="5" cy="50" r="6" fill="#DAA520" stroke="#8B4513" strokeWidth="2" />
      </svg>

      <svg className="absolute bottom-2 left-2 w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <path
          d="M5 50 Q5 5 50 5 M5 50 L5 95 M5 95 L50 95"
          stroke="#8B4513"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="5" cy="50" r="6" fill="#DAA520" stroke="#8B4513" strokeWidth="2" />
      </svg>

      <svg className="absolute bottom-2 right-2 w-24 h-24 rotate-180" viewBox="0 0 100 100">
        <path
          d="M5 50 Q5 5 50 5 M5 50 L5 95 M5 95 L50 95"
          stroke="#8B4513"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="5" cy="50" r="6" fill="#DAA520" stroke="#8B4513" strokeWidth="2" />
      </svg>
    </div>
  );
}

// 涂鸦贴纸
function GraffitiStickers() {
  const stickers = [
    { emoji: "🎨", x: "92%", y: "40%", rotate: 15 },
    { emoji: "💀", x: "3%", y: "85%", rotate: -10 },
    { emoji: "👁️", x: "88%", y: "8%", rotate: 5 },
    { emoji: "🔥", x: "6%", y: "8%", rotate: -8 },
    { emoji: "⚡", x: "50%", y: "92%", rotate: 12 },
    { emoji: "🌈", x: "95%", y: "70%", rotate: -5 },
  ];

  return (
    <>
      {stickers.map((sticker, i) => (
        <motion.div
          key={i}
          className="fixed text-4xl z-20 pointer-events-none"
          style={{ left: sticker.x, top: sticker.y, rotate: `${sticker.rotate}deg` }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [sticker.rotate, sticker.rotate + 5, sticker.rotate],
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
        >
          {sticker.emoji}
        </motion.div>
      ))}
    </>
  );
}

// 手绘箭头和标注
function HandDrawnAnnotations() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-5">
      {/* 手绘箭头 */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
      >
        {/* 箭头1 */}
        <path
          d="M80 120 Q100 100 130 110 L125 100 M130 110 L120 115"
          stroke="#FF4081"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* 箭头2 */}
        <path
          d="M850 80 Q880 90 900 70 L895 80 M900 70 L890 72"
          stroke="#00BCD4"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* 下划线强调 */}
        <motion.path
          d="M200 500 Q250 505 300 498 Q350 492 400 500"
          stroke="#FFEB3B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5 3"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>

      {/* 手绘圆圈标注 */}
      <motion.ellipse
        cx="85%"
        cy="50%"
        rx="60"
        ry="40"
        stroke="#9C27B0"
        strokeWidth="3"
        fill="none"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: [0, 5, 0] }}
        transition={{ pathLength: { duration: 2 }, rotate: { duration: 3, repeat: Infinity } }}
        style={{ transformOrigin: "85% 50%" }}
      />
    </svg>
  );
}

// 像素艺术装饰
function PixelArtDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* 像素心形 */}
      <svg className="absolute left-[15%] top-[75%] w-12 h-12" viewBox="0 0 16 16">
        <rect x="3" y="2" width="2" height="2" fill="#FF4081" />
        <rect x="5" y="1" width="2" height="2" fill="#FF4081" />
        <rect x="7" y="2" width="2" height="2" fill="#FF4081" />
        <rect x="9" y="1" width="2" height="2" fill="#FF4081" />
        <rect x="11" y="2" width="2" height="2" fill="#FF4081" />
        <rect x="2" y="4" width="2" height="2" fill="#FF4081" />
        <rect x="12" y="4" width="2" height="2" fill="#FF4081" />
        <rect x="2" y="6" width="12" height="2" fill="#FF4081" />
        <rect x="3" y="8" width="10" height="2" fill="#FF4081" />
        <rect x="4" y="10" width="8" height="2" fill="#FF4081" />
        <rect x="5" y="12" width="6" height="2" fill="#FF4081" />
        <rect x="6" y="14" width="4" height="2" fill="#FF4081" />
      </svg>

      {/* 像素星星 */}
      <motion.svg
        className="absolute right-[20%] top-[15%] w-10 h-10"
        viewBox="0 0 16 16"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <rect x="7" y="0" width="2" height="4" fill="#FFEB3B" />
        <rect x="7" y="12" width="2" height="4" fill="#FFEB3B" />
        <rect x="0" y="7" width="4" height="2" fill="#FFEB3B" />
        <rect x="12" y="7" width="4" height="2" fill="#FFEB3B" />
        <rect x="6" y="6" width="4" height="4" fill="#FFEB3B" />
      </motion.svg>
    </div>
  );
}

// 胶带贴纸效果
function TapeStickers() {
  const tapes = [
    { x: "8%", y: "20%", rotate: 45, color: "#FFEB3B80" },
    { x: "85%", y: "25%", rotate: -30, color: "#FF408180" },
    { x: "5%", y: "60%", rotate: 15, color: "#00BCD480" },
    { x: "90%", y: "75%", rotate: -45, color: "#CCFF0080" },
  ];

  return (
    <>
      {tapes.map((tape, i) => (
        <div
          key={i}
          className="fixed w-20 h-6 pointer-events-none z-15"
          style={{
            left: tape.x,
            top: tape.y,
            transform: `rotate(${tape.rotate}deg)`,
            background: tape.color,
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      ))}
    </>
  );
}

export default function MultiZhangyangBackground() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
      {/* 基础纸张纹理 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #fefefe 0%, #f8f8f8 50%, #fefefe 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")
          `,
        }}
      />

      <WatercolorSplashes />
      <CyberpunkLines />
      <MedievalBorders />
      <ComicSoundEffects />
      <SpeechBubbles />
      <GraffitiStickers />
      <HandDrawnAnnotations />
      <PixelArtDecor />
      <TapeStickers />
    </div>
  );
}
