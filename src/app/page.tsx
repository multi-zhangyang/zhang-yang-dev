"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import HeroLaptop from "@/components/HeroLaptop";
import NoiseOverlay from "@/components/NoiseOverlay";
import ClickSpark from "@/components/ClickSpark";
import MusicPlayer from "@/components/MusicPlayer";
import Clock from "@/components/Clock";
import SocialDock from "@/components/SocialDock";

import IntroAnimation from "@/components/IntroAnimation";
import CleanBackground from "@/components/CleanBackground";

// 桌面端贴纸数据
const desktopStickers = [
  // 顶部区域
  { src: "/images/sucked-logos/1.png", x: "5%", y: "2%", rotate: -12, size: 85 },
  { src: "/images/sucked-logos/2.png", x: "25%", y: "4%", rotate: 8, size: 80 },
  { src: "/images/sucked-logos/3.png", x: "45%", y: "2%", rotate: -5, size: 75 },
  { src: "/images/sucked-logos/4.png", x: "65%", y: "3%", rotate: 10, size: 82 },
  { src: "/images/sucked-logos/5.png", x: "85%", y: "2%", rotate: -8, size: 78 },
  // 左侧
  { src: "/images/sucked-logos/6.png", x: "2%", y: "18%", rotate: 15, size: 88 },
  { src: "/images/sucked-logos/7.png", x: "3%", y: "38%", rotate: -8, size: 85 },
  { src: "/images/sucked-logos/8.png", x: "2%", y: "58%", rotate: 12, size: 80 },
  { src: "/images/sucked-logos/9.png", x: "3%", y: "78%", rotate: -10, size: 82 },
  // 右侧
  { src: "/images/sucked-logos/10.png", x: "88%", y: "18%", rotate: -10, size: 85 },
  { src: "/images/sucked-logos/11.png", x: "87%", y: "38%", rotate: 6, size: 88 },
  { src: "/images/sucked-logos/12.png", x: "88%", y: "58%", rotate: -7, size: 82 },
  { src: "/images/sucked-logos/13.png", x: "87%", y: "78%", rotate: 8, size: 80 },
  // 底部区域
  { src: "/images/sucked-logos/14.png", x: "15%", y: "88%", rotate: 5, size: 78 },
  { src: "/images/sucked-logos/15.png", x: "40%", y: "90%", rotate: -6, size: 75 },
  { src: "/images/sucked-logos/16.png", x: "60%", y: "88%", rotate: 8, size: 80 },
  { src: "/images/final-logos/f1.png", x: "80%", y: "90%", rotate: -12, size: 85 },
  // final logos 散落
  { src: "/images/final-logos/Create5-Photoroom.png", x: "18%", y: "15%", rotate: -5, size: 100 },
  { src: "/images/final-logos/Modify.png", x: "75%", y: "12%", rotate: 7, size: 95 },
  { src: "/images/final-logos/f2.png", x: "12%", y: "70%", rotate: -8, size: 90 },
];

// 移动端贴纸数据 - 围绕边缘分布，中间留空给 welcome 图片
const mobileStickers = [
  // 顶部一排（3个）
  { src: "/images/sucked-logos/1.png", x: "3%", y: "2%", rotate: -12, size: 36 },
  { src: "/images/sucked-logos/2.png", x: "40%", y: "1%", rotate: 5, size: 32 },
  { src: "/images/sucked-logos/3.png", x: "75%", y: "2%", rotate: 8, size: 34 },
  // 左侧（3个，避开中间）
  { src: "/images/sucked-logos/4.png", x: "1%", y: "15%", rotate: -8, size: 34 },
  { src: "/images/sucked-logos/5.png", x: "2%", y: "72%", rotate: 10, size: 36 },
  { src: "/images/sucked-logos/6.png", x: "1%", y: "88%", rotate: -5, size: 32 },
  // 右侧（3个，避开中间）
  { src: "/images/sucked-logos/7.png", x: "80%", y: "14%", rotate: 12, size: 35 },
  { src: "/images/sucked-logos/8.png", x: "78%", y: "70%", rotate: -10, size: 34 },
  { src: "/images/sucked-logos/9.png", x: "76%", y: "86%", rotate: 6, size: 36 },
  // 底部一排（2个，避开 scroll down）
  { src: "/images/sucked-logos/10.png", x: "15%", y: "90%", rotate: -6, size: 32 },
  { src: "/images/sucked-logos/11.png", x: "62%", y: "91%", rotate: 8, size: 34 },
  // final logos（2个，放在角落）
  { src: "/images/final-logos/Create5-Photoroom.png", x: "2%", y: "30%", rotate: -3, size: 42 },
  { src: "/images/final-logos/Modify.png", x: "74%", y: "32%", rotate: 5, size: 40 },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stickers = isMobile ? mobileStickers : desktopStickers;

  return (
    <main className="relative">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <CleanBackground />
          <ClickSpark />
          <NoiseOverlay />
          
          {/* 第一屏：欢迎区域 + 贴纸展示 */}
          <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* 欢迎图片 - 居中 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10"
            >
              <Image
                src="/images/welcome.png"
                alt="Welcome"
                width={600}
                height={300}
                className="w-[280px] md:w-[500px] lg:w-[650px] h-auto"
                priority
              />
            </motion.div>

            {/* 贴纸散落 */}
            {stickers.map((sticker, i) => {
              const isSelected = selectedSticker === i;
              return (
                <motion.div
                  key={`${isMobile ? 'm' : 'd'}-${i}`}
                  className="absolute cursor-pointer"
                  style={{ 
                    left: sticker.x, 
                    top: sticker.y,
                    zIndex: isSelected ? 100 : 1,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: sticker.rotate - 20 }}
                  animate={{ 
                    opacity: isSelected ? 1 : 0.85, 
                    scale: isSelected ? (isMobile ? 2 : 2.5) : 1, 
                    rotate: isSelected ? 0 : sticker.rotate,
                  }}
                  transition={{ duration: 0.3, type: "spring", damping: 20 }}
                  whileHover={isSelected ? {} : { scale: 1.1, rotate: sticker.rotate + 5, opacity: 1 }}
                  onClick={() => setSelectedSticker(isSelected ? null : i)}
                >
                  <Image
                    src={sticker.src}
                    alt=""
                    width={sticker.size}
                    height={sticker.size}
                    className="w-auto h-auto"
                    style={{ width: sticker.size }}
                  />
                </motion.div>
              );
            })}

            {/* 向下滚动提示 */}
            <motion.div
              className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-xs md:text-sm font-mono">Scroll Down</span>
              <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </section>

          {/* 第二屏：电脑区域 */}
          <section className="min-h-screen relative flex items-center justify-center py-10 md:py-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl"
            >
              <HeroLaptop />
            </motion.div>
          </section>

          {/* 底部区域：社交链接、音乐播放器、时钟 */}
          <footer className="relative py-8 md:py-16 border-t border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`w-full px-4 md:px-8 lg:px-16 xl:px-24 ${
                isMobile 
                  ? 'flex flex-col items-center gap-6' 
                  : 'flex justify-between items-center'
              }`}
            >
              {/* 社交链接 */}
              <SocialDock inline />
              
              {/* 音乐播放器 */}
              <MusicPlayer inline />
              
              {/* 时钟 */}
              <Clock inline />
            </motion.div>
            
            <p className="text-gray-400 text-xs md:text-sm font-mono mt-6 md:mt-8 text-center">
              Made with love by Zhang Yang
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
