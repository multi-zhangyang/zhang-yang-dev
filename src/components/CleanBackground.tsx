"use client";

import { motion } from "framer-motion";

export default function CleanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fefefe]">
      {/* 水彩渐变光斑 */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, #FF4081 0%, #FF408133 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #00BCD4 0%, #00BCD433 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ scale: [1, 1.15, 1], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, #FFEB3B 0%, #FFEB3B33 40%, transparent 70%)",
          filter: "blur(75px)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #9C27B0 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* 网格背景 */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* 对角线条纹 */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.06]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-[400px] bg-black origin-top-left"
            style={{ transform: `rotate(45deg) translateY(${i * 25}px)` }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] opacity-[0.05]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-[350px] bg-black origin-bottom-left"
            style={{ transform: `rotate(-45deg) translateY(${-i * 25}px)` }}
          />
        ))}
      </div>

      {/* 漫画拟声词 - 分散在角落 */}
      <div className="absolute top-20 left-10 font-black text-4xl text-[#FF4081]/20 rotate-[-15deg]" style={{ fontFamily: "'Bangers', cursive" }}>
        BOOM!
      </div>
      <div className="absolute top-32 right-20 font-black text-3xl text-[#00BCD4]/20 rotate-[10deg]" style={{ fontFamily: "'Bangers', cursive" }}>
        ZAP!
      </div>
      <div className="absolute bottom-40 left-20 font-black text-3xl text-[#FFEB3B]/30 rotate-[5deg]" style={{ fontFamily: "'Bangers', cursive" }}>
        POW!
      </div>
      <div className="absolute bottom-20 right-32 font-black text-4xl text-[#9C27B0]/20 rotate-[-8deg]" style={{ fontFamily: "'Bangers', cursive" }}>
        WHAM!
      </div>

      {/* 装饰性几何 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* 星星 */}
        <motion.path
          d="M50 20 L53 30 L63 30 L55 37 L58 47 L50 40 L42 47 L45 37 L37 30 L47 30 Z"
          fill="#FFEB3B"
          opacity="0.5"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ transformOrigin: "50px 35px" }}
        />
        
        {/* 圆环 */}
        <circle cx="90%" cy="40%" r="30" fill="none" stroke="#FF4081" strokeWidth="3" opacity="0.15" />
        <circle cx="90%" cy="40%" r="20" fill="none" stroke="#FF4081" strokeWidth="2" opacity="0.1" />
        
        {/* 三角形 */}
        <motion.path
          d="M 80 750 L 110 700 L 140 750 Z"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="2"
          opacity="0.2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* 十字 */}
        <g opacity="0.15" transform="translate(100, 500)">
          <rect x="-2" y="-15" width="4" height="30" fill="#9C27B0" />
          <rect x="-15" y="-2" width="30" height="4" fill="#9C27B0" />
        </g>

        {/* 散落的点 */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={`${10 + (i * 17) % 85}%`}
            cy={`${10 + (i * 23) % 85}%`}
            r={2 + (i % 3)}
            fill={["#FF4081", "#00BCD4", "#FFEB3B", "#9C27B0", "#CCFF00"][i % 5]}
            opacity={0.1 + (i % 4) * 0.05}
          />
        ))}

        {/* 虚线装饰 */}
        <path
          d="M 0 200 Q 200 180 400 220"
          fill="none"
          stroke="#FF4081"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.1"
        />
        <path
          d="M 100% 600 Q 80% 580 60% 620"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.1"
        />
      </svg>

      {/* 半调网点效果 - 角落 */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "8px 8px"
        }}
      />
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "6px 6px"
        }}
      />

      {/* 边框装饰线 */}
      <div className="absolute top-4 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#FF4081]/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#00BCD4]/20 to-transparent" />

    </div>
  );
}
