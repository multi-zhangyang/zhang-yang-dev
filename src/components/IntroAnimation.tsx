"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";

// 被吸入黑洞的logo列表
const suckedLogoFiles = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png"];
// 最终显示的logo列表
const finalLogoFiles = ["Create5-Photoroom.png", "Modify.png", "f1.png", "f2.png"];
// 黑洞图片列表
const blackholeFiles = ["hole.png", "hole1.png", "hole2.png"];

const colors = ["#FF4081", "#FFEB3B", "#00BCD4", "#CCFF00", "#2979FF", "#9C27B0", "#FF6B35", "#E91E63"];
const SUCKED_LOGO_COUNT = 8;

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomItems = <T,>(arr: T[], count: number): T[] => {
  if (arr.length === 0) return [];
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, arr.length));
};

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [suckingLogos, setSuckingLogos] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 随机选择图片
  const logos = useMemo(() => 
    getRandomItems(suckedLogoFiles, SUCKED_LOGO_COUNT).map(f => `/images/sucked-logos/${f}`), 
  []);
  const blackholeSrc = useMemo(() => `/images/blackholes/${getRandomItem(blackholeFiles)}`, []);
  const finalLogoSrc = useMemo(() => `/images/final-logos/${getRandomItem(finalLogoFiles)}`, []);

  // 预加载图片
  const preloadImages = useCallback(async () => {
    const allImages = [blackholeSrc, finalLogoSrc, ...logos];
    let loaded = 0;
    
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          loaded++;
          setLoadProgress(Math.round((loaded / allImages.length) * 100));
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setLoadProgress(Math.round((loaded / allImages.length) * 100));
          resolve();
        };
        img.src = src;
      });
    };

    await Promise.all(allImages.map(loadImage));
    setImagesLoaded(true);
  }, [blackholeSrc, finalLogoSrc, logos]);

  // 检测移动端
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 预加载图片
  useEffect(() => {
    if (mounted) {
      preloadImages();
    }
  }, [mounted, preloadImages]);

  // 动画时序
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const logoCount = logos.length;
    const timers = [
      setTimeout(() => setPhase(1), 400),
    ];
    for (let i = 0; i < logoCount; i++) {
      const indices = Array.from({ length: i + 1 }, (_, j) => j);
      timers.push(setTimeout(() => setSuckingLogos(indices), 1200 + i * 600));
    }
    timers.push(setTimeout(() => setPhase(2), 1200 + logoCount * 600 + 1000));
    timers.push(setTimeout(() => setPhase(3), 1200 + logoCount * 600 + 1500));
    return () => timers.forEach(clearTimeout);
  }, [imagesLoaded, logos.length]);

  if (!mounted) return null;

  // 移动端的起始位置（从下方飞入）
  const mobileStartPositions = [
    { x: -100, y: 300 },
    { x: 0, y: 350 },
    { x: 100, y: 300 },
    { x: -50, y: 320 },
    { x: 50, y: 340 },
    { x: -80, y: 360 },
    { x: 80, y: 310 },
    { x: 0, y: 380 },
  ];

  // 桌面端的起始位置（从右侧飞入）
  const desktopStartPositions = [
    { x: 500, y: -200 },
    { x: 550, y: 0 },
    { x: 500, y: 200 },
    { x: 480, y: -100 },
    { x: 520, y: 100 },
    { x: 540, y: -250 },
    { x: 530, y: 250 },
    { x: 490, y: -150 },
  ];

  const startPositions = isMobile ? mobileStartPositions : desktopStartPositions;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] overflow-hidden bg-[#fefefe]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 加载进度显示 */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
            <motion.div
              className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500"
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.p
              className="mt-4 text-gray-400 text-xs tracking-widest font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              LOADING {loadProgress}%
            </motion.p>
          </div>
        )}

        {/* 水彩背景 */}
        <motion.div
          className="absolute -left-20 -top-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,64,129,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 top-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute left-1/3 bottom-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,235,59,0.08) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />

        {/* 黑洞 - 移动端居中偏上，桌面端左侧 */}
        {imagesLoaded && (
          <motion.div
            className={`absolute ${isMobile ? 'left-1/2 -translate-x-1/2 top-[15%]' : 'top-1/2 -translate-y-1/2'}`}
            style={isMobile ? {
              width: "min(70vw, 350px)",
              height: "min(70vw, 350px)",
            } : {
              left: "5%",
              width: "min(90vh, 900px)",
              height: "min(90vh, 900px)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase >= 1 && phase < 3 ? 1 : 0,
              opacity: phase >= 1 && phase < 3 ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <Image src={blackholeSrc} alt="Black Hole" fill className="object-contain" priority />
            </motion.div>
          </motion.div>
        )}

        {/* 引力线 - 移动端从下方，桌面端从右侧 */}
        {imagesLoaded && phase >= 1 && phase < 3 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={i}
                d={isMobile 
                  ? `M ${25 + i * 10}% 100% Q ${48 + (i - 3) * 2}% 60% 50% 35%`
                  : `M 100% ${25 + i * 10}% Q 60% ${48 + (i - 3) * 2}% 25% 50%`
                }
                fill="none"
                stroke={colors[i]}
                strokeWidth="1.5"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </svg>
        )}

        {/* 粒子流 */}
        {imagesLoaded && phase >= 1 && phase < 3 && [...Array(isMobile ? 10 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: colors[i % 6],
              boxShadow: `0 0 8px ${colors[i % 6]}`,
              ...(isMobile ? {
                bottom: "-2%",
                left: `${15 + i * 7}%`,
              } : {
                right: "-2%",
                top: `${15 + i * 5}%`,
              })
            }}
            animate={isMobile ? {
              y: [0, "-80vh"],
              x: [0, `${(50 - (15 + i * 7)) * 0.5}vw`],
              scale: [1, 0.3, 0],
              opacity: [0, 1, 0],
            } : {
              x: [0, "-80vw"],
              y: [0, `${(50 - (15 + i * 5)) * 1}vh`],
              scale: [1, 0.3, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}

        {/* Logo 被吸入 */}
        {imagesLoaded && suckingLogos.map((logoIndex) => {
          const start = startPositions[logoIndex % startPositions.length];
          if (!logos[logoIndex]) return null;
          return (
            <motion.div
              key={logoIndex}
              className="absolute z-20"
              style={{ left: "50%", top: isMobile ? "35%" : "50%" }}
              initial={{ x: start.x, y: start.y, scale: 0, opacity: 0 }}
              animate={isMobile ? {
                x: [start.x, start.x * 0.3, 0, 0],
                y: [start.y, start.y * 0.4, -50, -150],
                scale: [0, 0.8, 0.6, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, -10, -60, -360],
              } : {
                x: [start.x, start.x * 0.3, -200, -450],
                y: [start.y, start.y * 0.4, start.y * 0.1, 0],
                scale: [0, 1, 0.8, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, -10, -60, -360],
              }}
              transition={{ duration: 1.8, ease: "easeInOut", times: [0, 0.2, 0.6, 1] }}
            >
              <div className="relative" style={{ x: "-50%", y: "-50%" }}>
                <Image
                  src={logos[logoIndex]}
                  alt=""
                  width={280}
                  height={140}
                  className={isMobile ? "w-[120px] h-auto" : "w-[200px] h-auto md:w-[260px] lg:w-[320px]"}
                />
              </div>
            </motion.div>
          );
        })}

        {/* 闪光过渡 */}
        <motion.div
          className="absolute inset-0 z-30 bg-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 2 ? [0, 1, 0] : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* 最终 Logo + 进入按钮 - 移动端垂直布局，桌面端水平布局 */}
        {imagesLoaded && (
          <motion.div
            className={`absolute z-50 inset-0 flex items-center justify-center px-4 md:px-8 ${
              isMobile ? 'flex-col gap-8' : 'flex-row gap-8 md:gap-16 lg:gap-24'
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: phase >= 3 ? 1 : 0, opacity: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          >
            {/* Logo */}
            <Image
              src={finalLogoSrc}
              alt="Logo"
              width={600}
              height={300}
              className={isMobile 
                ? "w-[250px] h-auto" 
                : "w-[280px] h-auto md:w-[400px] lg:w-[500px] xl:w-[600px]"
              }
              priority
              style={{ filter: "drop-shadow(0 0 30px rgba(255,64,129,0.5)) drop-shadow(0 0 60px rgba(0,188,212,0.3))" }}
            />
            
            {/* 按钮 */}
            <motion.button
              onClick={() => onComplete()}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative border-2 border-black bg-transparent group-hover:bg-black transition-colors duration-200 ${
                isMobile ? 'px-8 py-3' : 'px-10 py-4 md:px-14 md:py-5'
              }`}>
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-black" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-black" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-black" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-black" />
                
                <span className={`font-medium tracking-[0.3em] text-black group-hover:text-white transition-colors duration-200 flex items-center gap-4 ${
                  isMobile ? 'text-sm' : 'text-base md:text-lg'
                }`}>
                  ENTER
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⟶
                  </motion.span>
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        )}

        {/* 底部文字 */}
        <motion.p
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs tracking-widest"
          animate={{ opacity: imagesLoaded && phase < 3 && phase > 0 ? [0.3, 0.6, 0.3] : 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          LOADING...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
