"use client";

import { motion } from "framer-motion";

export default function DoodleBackground() {
  return (
    <div className="fixed inset-0 z-[-20] pointer-events-none overflow-hidden">
      {/* Paper texture base */}
      <div className="absolute inset-0 bg-[#fefefe]" />
      
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* SATURN - refined */}
      <motion.svg
        className="absolute -top-10 -right-20 w-[400px] h-[400px]"
        viewBox="0 0 300 300"
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Ring behind */}
        <ellipse cx="150" cy="150" rx="130" ry="35" fill="none" stroke="#E8B86D" strokeWidth="12" opacity="0.4" transform="rotate(-15 150 150)" />
        <ellipse cx="150" cy="150" rx="115" ry="28" fill="none" stroke="#D4A056" strokeWidth="8" opacity="0.3" transform="rotate(-15 150 150)" />
        
        {/* Planet body */}
        <defs>
          <linearGradient id="saturnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFB74D" />
            <stop offset="100%" stopColor="#FF8A65" />
          </linearGradient>
        </defs>
        <circle cx="150" cy="150" r="70" fill="url(#saturnGrad)" />
        <circle cx="150" cy="150" r="70" stroke="black" strokeWidth="3" fill="none" />
        
        {/* Planet bands */}
        <path d="M85 135 Q150 130 215 135" stroke="#E8B86D" strokeWidth="6" fill="none" opacity="0.5" />
        <path d="M82 155 Q150 150 218 155" stroke="#FFCC80" strokeWidth="4" fill="none" opacity="0.4" />
        <path d="M85 172 Q150 175 215 172" stroke="#E8B86D" strokeWidth="5" fill="none" opacity="0.3" />
        
        {/* Ring front */}
        <path d="M50 165 Q150 200 250 165" stroke="#E8B86D" strokeWidth="10" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M60 172 Q150 202 240 172" stroke="#D4A056" strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
      </motion.svg>

      {/* ROCKET - more detailed */}
      <motion.svg
        className="absolute w-24 h-36"
        viewBox="0 0 70 110"
        initial={{ x: "-5%", y: "55%" }}
        animate={{ x: ["0%", "105vw"], y: ["55%", "15%"], rotate: -35 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {/* Rocket body */}
        <defs>
          <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E3F2FD" />
            <stop offset="50%" stopColor="#BBDEFB" />
            <stop offset="100%" stopColor="#90CAF9" />
          </linearGradient>
        </defs>
        <path d="M35 8 C45 8 52 25 52 50 L52 75 L18 75 L18 50 C18 25 25 8 35 8" fill="url(#rocketBody)" stroke="black" strokeWidth="2.5" />
        
        {/* Nose cone */}
        <path d="M35 3 C42 3 48 12 48 20 L22 20 C22 12 28 3 35 3" fill="#EF5350" stroke="black" strokeWidth="2" />
        
        {/* Window */}
        <circle cx="35" cy="40" r="10" fill="#1E88E5" stroke="black" strokeWidth="2" />
        <circle cx="35" cy="40" r="6" fill="#42A5F5" />
        <ellipse cx="33" cy="38" rx="2" ry="3" fill="white" opacity="0.6" />
        
        {/* Fins */}
        <path d="M18 65 L5 85 L5 90 L18 78" fill="#EF5350" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        <path d="M52 65 L65 85 L65 90 L52 78" fill="#EF5350" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Bottom */}
        <rect x="22" y="75" width="26" height="8" fill="#455A64" stroke="black" strokeWidth="2" />
        
        {/* Flames */}
        <motion.g animate={{ scaleY: [1, 1.2, 0.9, 1.1, 1] }} transition={{ duration: 0.3, repeat: Infinity }}>
          <path d="M26 83 L35 108 L44 83" fill="#FF9800" />
          <path d="M29 83 L35 100 L41 83" fill="#FFEB3B" />
          <path d="M32 83 L35 93 L38 83" fill="#FFF9C4" />
        </motion.g>
      </motion.svg>

      {/* UFO - refined */}
      <motion.svg
        className="absolute left-[12%] top-[18%] w-32 h-20"
        viewBox="0 0 120 75"
        animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Beam */}
        <motion.path
          d="M35 52 L15 90 L105 90 L85 52"
          fill="url(#beamGrad)"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Dome */}
        <ellipse cx="60" cy="28" rx="22" ry="18" fill="#B2EBF2" stroke="black" strokeWidth="2.5" />
        <ellipse cx="60" cy="26" rx="14" ry="10" fill="#E0F7FA" opacity="0.6" />
        
        {/* Body */}
        <defs>
          <linearGradient id="ufoBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ECEFF1" />
            <stop offset="100%" stopColor="#90A4AE" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="42" rx="50" ry="14" fill="url(#ufoBody)" stroke="black" strokeWidth="2.5" />
        
        {/* Lights */}
        <motion.circle cx="30" cy="42" r="4" fill="#FFEB3B" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.4, repeat: Infinity }} />
        <motion.circle cx="50" cy="46" r="4" fill="#FF4081" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.4, repeat: Infinity }} />
        <motion.circle cx="70" cy="46" r="4" fill="#00E676" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} />
        <motion.circle cx="90" cy="42" r="4" fill="#00BCD4" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }} />
      </motion.svg>

      {/* ALIEN - cuter */}
      <motion.svg
        className="absolute right-[8%] bottom-[22%] w-20 h-28"
        viewBox="0 0 70 100"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Body */}
        <ellipse cx="35" cy="72" rx="20" ry="22" fill="#A5D6A7" stroke="black" strokeWidth="2.5" />
        
        {/* Head */}
        <ellipse cx="35" cy="35" rx="28" ry="24" fill="#A5D6A7" stroke="black" strokeWidth="2.5" />
        
        {/* Eyes */}
        <ellipse cx="24" cy="32" rx="9" ry="11" fill="black" />
        <ellipse cx="46" cy="32" rx="9" ry="11" fill="black" />
        <ellipse cx="26" cy="29" rx="3" ry="4" fill="white" />
        <ellipse cx="48" cy="29" rx="3" ry="4" fill="white" />
        
        {/* Smile */}
        <path d="M28 48 Q35 54 42 48" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Antenna */}
        <path d="M35 11 Q35 5 35 2" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="2" r="4" fill="#FF4081" stroke="black" strokeWidth="1.5" />
        
        {/* Waving arm */}
        <motion.g
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ transformOrigin: "55px 65px" }}
        >
          <path d="M55 65 Q68 55 65 40" stroke="#A5D6A7" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M55 65 Q68 55 65 40" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <ellipse cx="65" cy="38" rx="6" ry="5" fill="#A5D6A7" stroke="black" strokeWidth="2" />
        </motion.g>
        
        {/* Other arm */}
        <path d="M15 65 Q5 70 8 80" stroke="#A5D6A7" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M15 65 Q5 70 8 80" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* MOON - refined */}
      <motion.svg
        className="absolute -bottom-12 -left-12 w-56 h-56"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <defs>
          <radialGradient id="moonGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FAFAFA" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="85" fill="url(#moonGrad)" stroke="black" strokeWidth="3" />
        
        {/* Craters */}
        <circle cx="65" cy="75" r="18" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="2" />
        <circle cx="130" cy="65" r="12" fill="#EEEEEE" stroke="#BDBDBD" strokeWidth="1.5" />
        <circle cx="115" cy="115" r="22" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="2" />
        <circle cx="55" cy="125" r="10" fill="#EEEEEE" stroke="#BDBDBD" strokeWidth="1.5" />
        <circle cx="145" cy="130" r="8" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="1" />
        
        {/* Cute face */}
        <circle cx="70" cy="85" r="4" fill="#424242" />
        <circle cx="120" cy="85" r="4" fill="#424242" />
        <path d="M80 115 Q100 130 120 115" stroke="#424242" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="60" cy="100" rx="8" ry="5" fill="#FFCDD2" opacity="0.6" />
        <ellipse cx="130" cy="100" rx="8" ry="5" fill="#FFCDD2" opacity="0.6" />
      </motion.svg>

      {/* ASTRONAUT - more detailed */}
      <motion.svg
        className="absolute right-[22%] top-[12%] w-16 h-24"
        viewBox="0 0 55 80"
        animate={{ y: [0, -10, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Backpack */}
        <rect x="8" y="35" width="10" height="22" rx="3" fill="#78909C" stroke="black" strokeWidth="2" />
        
        {/* Body */}
        <rect x="15" y="32" width="25" height="30" rx="8" fill="white" stroke="black" strokeWidth="2.5" />
        
        {/* Helmet */}
        <circle cx="27" cy="20" r="16" fill="white" stroke="black" strokeWidth="2.5" />
        <circle cx="27" cy="20" r="11" fill="#81D4FA" stroke="black" strokeWidth="2" />
        <ellipse cx="24" cy="17" rx="3" ry="4" fill="white" opacity="0.5" />
        
        {/* Visor reflection */}
        <path d="M20 15 Q27 12 34 15" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
        
        {/* Arms */}
        <ellipse cx="8" cy="48" rx="6" ry="5" fill="white" stroke="black" strokeWidth="2" />
        <ellipse cx="47" cy="48" rx="6" ry="5" fill="white" stroke="black" strokeWidth="2" />
        
        {/* Legs */}
        <ellipse cx="22" cy="68" rx="5" ry="7" fill="white" stroke="black" strokeWidth="2" />
        <ellipse cx="33" cy="68" rx="5" ry="7" fill="white" stroke="black" strokeWidth="2" />
        
        {/* Details */}
        <rect x="20" y="40" width="15" height="8" rx="2" fill="#E0E0E0" stroke="black" strokeWidth="1" />
        <circle cx="24" cy="44" r="2" fill="#4CAF50" />
        <circle cx="31" cy="44" r="2" fill="#F44336" />
      </motion.svg>

      {/* STARS - refined */}
      {[...Array(20)].map((_, i) => (
        <motion.svg
          key={i}
          className="absolute"
          style={{
            left: `${8 + (i * 17) % 84}%`,
            top: `${5 + (i * 23) % 80}%`,
            width: 12 + (i % 3) * 8,
            height: 12 + (i % 3) * 8,
          }}
          viewBox="0 0 24 24"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 1.5 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
        >
          <path
            d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z"
            fill={["#FFD54F", "#FF4081", "#4DD0E1", "#B2FF59", "#448AFF"][i % 5]}
            stroke="black"
            strokeWidth="1"
            opacity="0.7"
          />
        </motion.svg>
      ))}

      {/* COMET */}
      <motion.svg
        className="absolute w-32 h-16"
        viewBox="0 0 120 50"
        initial={{ x: "105vw", y: "8%" }}
        animate={{ x: "-15vw", y: "35%" }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
      >
        <defs>
          <linearGradient id="cometTail" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4DD0E1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="105" cy="25" rx="12" ry="10" fill="#E0F7FA" stroke="black" strokeWidth="2" />
        <ellipse cx="105" cy="25" rx="6" ry="5" fill="#4DD0E1" />
        <path d="M93 25 Q50 22 5 25 Q50 28 93 25" fill="url(#cometTail)" />
      </motion.svg>

      {/* Small planet */}
      <motion.svg
        className="absolute left-[3%] top-[45%] w-20 h-20"
        viewBox="0 0 60 60"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="30" cy="30" r="25" fill="#F48FB1" stroke="black" strokeWidth="2.5" />
        <ellipse cx="30" cy="30" rx="38" ry="10" stroke="black" strokeWidth="2" fill="none" />
        <ellipse cx="30" cy="30" rx="32" ry="7" stroke="#FCE4EC" strokeWidth="4" fill="none" opacity="0.6" />
      </motion.svg>

      {/* Nebula glow */}
      <div className="absolute top-[15%] left-[40%] w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[25%] right-[30%] w-64 h-64 bg-pink-400/5 rounded-full blur-3xl" />
    </div>
  );
}
