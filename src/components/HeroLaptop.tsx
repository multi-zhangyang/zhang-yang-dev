"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";

export default function HeroLaptop() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <motion.div
        className="relative w-full flex justify-center"
        animate={{ rotate: [-0.1, 0.1, -0.1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`relative ${isMobile ? 'w-[320px]' : 'w-[500px] md:w-[550px] lg:w-[650px]'}`}>
          <svg 
            viewBox="0 0 500 380" 
            fill="none"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Window shadow */}
            <path d="M28 20 Q255 8 482 24 Q494 195 488 358 Q255 375 22 362 Q10 195 28 20" fill="#FFEB3B" opacity="0.8" />
            {/* Main window */}
            <path d="M18 14 Q250 2 468 17 Q482 190 476 348 Q250 365 14 352 Q2 190 18 14" fill="#c0c0c0" />
            <path d="M14 12 Q250 -2 472 14 Q488 190 480 352 Q250 370 10 356 Q-6 190 14 12" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Title bar */}
            <path d="M24 20 Q250 10 464 24 Q468 54 464 62 Q250 70 24 62 Q20 44 24 20" fill="#000080" />
            <path d="M24 20 Q250 10 464 24 Q468 54 464 62 Q250 70 24 62 Q20 44 24 20" stroke="black" strokeWidth="2" fill="none" />
            <text x="40" y="46" fill="white" fontSize="15" fontFamily="monospace" fontWeight="bold">zhangyang.dev</text>
            
            {/* Window buttons */}
            <rect x="395" y="28" width="20" height="20" fill="#c0c0c0" stroke="black" strokeWidth="2" rx="2" />
            <path d="M400 42 L410 42" stroke="black" strokeWidth="2" />
            <rect x="420" y="28" width="20" height="20" fill="#c0c0c0" stroke="black" strokeWidth="2" rx="2" />
            <rect x="424" y="32" width="12" height="12" fill="none" stroke="black" strokeWidth="1.5" />
            <rect x="445" y="28" width="20" height="20" fill="#c0c0c0" stroke="black" strokeWidth="2" rx="2" />
            <path d="M450 34 L460 44 M460 34 L450 44" stroke="black" strokeWidth="2" />
            
            {/* Menu bar */}
            <path d="M24 65 Q250 58 464 68 Q468 88 464 94 Q250 102 24 96 Q20 82 24 65" fill="#c0c0c0" stroke="black" strokeWidth="1.5" />
            <text x="40" y="84" fill="black" fontSize="13" fontFamily="monospace">File   Edit   View   Help</text>
            
            {/* Content area */}
            <path d="M32 100 Q250 92 458 104 Q466 220 462 320 Q250 336 28 324 Q18 220 32 100" fill="white" />
            <path d="M32 100 Q250 92 458 104 Q466 220 462 320 Q250 336 28 324 Q18 220 32 100" stroke="black" strokeWidth="2" fill="none" />
            <path d="M44 112 Q250 104 446 116 Q454 215 450 308 Q250 322 40 312 Q30 215 44 112" stroke="#FF4081" strokeWidth="3" fill="none" opacity="0.6" />
            
            {/* Status bar */}
            <path d="M24 320 Q250 312 464 324 Q468 340 464 348 Q250 358 24 350 Q20 336 24 320" fill="#c0c0c0" stroke="black" strokeWidth="1.5" />
            <text x="40" y="340" fill="black" fontSize="12" fontFamily="monospace">Ready | zhangyang.dev</text>
            
            {/* Decorative lines */}
            <path d="M6 6 Q-6 180 10 360" stroke="#CCFF00" strokeWidth="4" opacity="0.6" />
            <path d="M490 10 Q504 185 486 365" stroke="#00BCD4" strokeWidth="4" opacity="0.6" />
          </svg>

          {/* Content overlay - 使用百分比定位 */}
          <div 
            className="absolute"
            style={{
              top: isMobile ? '32%' : '30%',
              left: isMobile ? '14%' : '11%',
              right: isMobile ? '14%' : '11%',
            }}
          >
            <h2 className={`font-bold mb-1 md:mb-2 font-mono ${isMobile ? 'text-sm' : 'text-lg md:text-xl'}`}>Welcome!</h2>
            <p className={`font-mono text-gray-600 mb-2 md:mb-4 ${isMobile ? 'text-[10px]' : 'text-xs md:text-sm'}`}>
              <TypewriterText texts={["I build cool web stuff_", "Creative developer_", "zhangyang.dev_"]} />
            </p>
            
            {/* Buttons */}
            <div className={`flex ${isMobile ? 'gap-1.5' : 'gap-2 md:gap-3'}`}>
              <motion.button
                onClick={() => setActiveWindow("projects")}
                className={`bg-[#00BCD4] text-white font-mono font-bold rounded border-2 border-black shadow-[2px_2px_0_#000] cursor-pointer ${
                  isMobile ? 'px-2 py-1 text-[8px]' : 'px-3 py-1.5 text-[10px] md:px-4 md:py-2 md:text-xs'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.button>

              <motion.button
                onClick={() => setActiveWindow("blog")}
                className={`bg-[#FF4081] text-white font-mono font-bold rounded border-2 border-black shadow-[2px_2px_0_#000] cursor-pointer ${
                  isMobile ? 'px-2 py-1 text-[8px]' : 'px-3 py-1.5 text-[10px] md:px-4 md:py-2 md:text-xs'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.button>

              <motion.button
                onClick={() => setActiveWindow("about")}
                className={`bg-[#FFEB3B] text-black font-mono font-bold rounded border-2 border-black shadow-[2px_2px_0_#000] cursor-pointer ${
                  isMobile ? 'px-2 py-1 text-[8px]' : 'px-3 py-1.5 text-[10px] md:px-4 md:py-2 md:text-xs'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Popup Windows */}
      <AnimatePresence>
        {activeWindow && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/40" onClick={() => setActiveWindow(null)} />
            <motion.div
              className="relative bg-[#c0c0c0] border-4 border-black rounded-lg shadow-2xl w-full max-w-xl max-h-[85vh] overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              drag={!isMobile}
              dragMomentum={false}
            >
              {/* Title bar */}
              <div
                className="h-10 flex items-center justify-between px-3 border-b-2 border-black rounded-t-md"
                style={{ background: activeWindow === "projects" ? "#00BCD4" : activeWindow === "blog" ? "#FF4081" : "#FFEB3B" }}
              >
                <span className={`font-mono font-bold text-sm ${activeWindow === "about" ? "text-black" : "text-white"}`}>
                  {activeWindow === "projects" && "Projects"}
                  {activeWindow === "blog" && "Blog"}
                  {activeWindow === "about" && "About Me"}
                </span>
                <motion.button
                  onClick={() => setActiveWindow(null)}
                  className="w-7 h-7 bg-[#c0c0c0] border-2 border-black rounded flex items-center justify-center font-bold hover:bg-red-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 bg-white border-2 border-black m-1 rounded min-h-[200px] max-h-[calc(85vh-60px)] overflow-auto">
                {activeWindow === "projects" && <ProjectsContent isMobile={isMobile} />}
                {activeWindow === "blog" && <BlogContent isMobile={isMobile} />}
                {activeWindow === "about" && <AboutContent isMobile={isMobile} />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


function ProjectsContent({ isMobile }: { isMobile: boolean }) {
  const projects = [
    { name: "This Website", desc: "Hand-drawn chaos with React & Framer Motion", tech: ["Next.js", "Framer Motion", "Tailwind"], color: "#00BCD4" },
    { name: "Web Games", desc: "Fun interactive browser games", tech: ["Canvas", "WebGL"], color: "#FF4081" },
    { name: "AI Tools", desc: "Machine learning experiments", tech: ["Python", "TensorFlow"], color: "#9C27B0" },
    { name: "Mobile Apps", desc: "Cross-platform applications", tech: ["React Native"], color: "#FFEB3B" },
  ];

  return (
    <div className="space-y-3 md:space-y-4">
      <p className={`font-bold font-mono border-b-2 border-gray-200 pb-2 ${isMobile ? 'text-base' : 'text-lg'}`}>Cool stuff I made</p>
      {projects.map((p) => (
        <motion.div 
          key={p.name} 
          className="p-3 md:p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-[#00BCD4] cursor-pointer"
          whileHover={{ x: isMobile ? 4 : 8, borderColor: p.color }}
        >
          <div className="flex items-start gap-2 md:gap-3">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: p.color }} />
            <div className="min-w-0">
              <p className={`font-bold font-mono ${isMobile ? 'text-sm' : 'text-base'}`}>{p.name}</p>
              <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>{p.desc}</p>
              <div className="flex gap-1.5 md:gap-2 mt-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className={`px-1.5 md:px-2 py-0.5 md:py-1 bg-white rounded border font-mono ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BlogContent({ isMobile }: { isMobile: boolean }) {
  const posts = [
    { date: "2024.12.12", title: "Why I love hand-drawn UI", tags: ["Design", "CSS"] },
    { date: "2024.12.01", title: "Framer Motion is amazing", tags: ["Animation", "React"] },
    { date: "2024.11.15", title: "Building chaotic websites", tags: ["Creative"] },
    { date: "2024.11.01", title: "My dev setup 2024", tags: ["Tools"] },
  ];

  return (
    <div className="space-y-3 md:space-y-4">
      <p className={`font-bold font-mono border-b-2 border-gray-200 pb-2 ${isMobile ? 'text-base' : 'text-lg'}`}>Latest thoughts</p>
      {posts.map((p, i) => (
        <motion.div 
          key={p.title} 
          className="p-3 md:p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-[#FF4081] cursor-pointer"
          whileHover={{ x: isMobile ? 4 : 8 }}
        >
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0 flex-1">
              <p className={`text-gray-400 font-mono ${isMobile ? 'text-[10px]' : 'text-xs'}`}>{p.date}</p>
              <p className={`font-bold font-mono mt-1 ${isMobile ? 'text-sm' : 'text-base'}`}>{p.title}</p>
              <div className="flex gap-1.5 md:gap-2 mt-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span key={tag} className={`px-1.5 md:px-2 py-0.5 md:py-1 bg-[#FF4081]/10 text-[#FF4081] rounded font-mono ${isMobile ? 'text-[10px]' : 'text-xs'}`}>#{tag}</span>
                ))}
              </div>
            </div>
            <span className={`font-bold text-gray-200 flex-shrink-0 ${isMobile ? 'text-xl' : 'text-2xl'}`}>0{i + 1}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AboutContent({ isMobile }: { isMobile: boolean }) {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX", level: 85 },
  ];

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="flex items-center gap-3 md:gap-5">
        <div className={`rounded-2xl bg-gradient-to-br from-[#FF4081] to-[#FFEB3B] flex items-center justify-center font-bold text-white border-3 border-black shadow-[4px_4px_0_#000] flex-shrink-0 ${
          isMobile ? 'w-14 h-14 text-xl' : 'w-20 h-20 text-3xl'
        }`}>
          ZY
        </div>
        <div className="min-w-0">
          <p className={`font-bold font-mono ${isMobile ? 'text-lg' : 'text-xl'}`}>Zhang Yang</p>
          <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Creative Developer</p>
          <div className="flex gap-2 mt-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-xs text-gray-400">Available for work</span>
          </div>
        </div>
      </div>
      
      <p className={`text-gray-600 leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>
        Hey! I&apos;m a developer who loves making weird, fun, interactive web experiences. I believe the web should be more playful and creative.
      </p>
      
      <div className="bg-gray-50 p-3 md:p-4 rounded-lg border-2 border-gray-200">
        <p className={`font-bold font-mono mb-3 ${isMobile ? 'text-sm' : 'text-base'}`}>Skills</p>
        <div className="space-y-2.5 md:space-y-3">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center gap-2 md:gap-3">
              <span className={`font-mono flex-shrink-0 ${isMobile ? 'w-16 text-xs' : 'w-20 text-sm'}`}>{s.name}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#FF4081] to-[#00BCD4] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <span className={`text-gray-400 flex-shrink-0 ${isMobile ? 'text-[10px] w-6' : 'text-xs w-8'}`}>{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
