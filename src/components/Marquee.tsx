"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "★ WELCOME TO ZHANGYANG.DEV ★ CREATIVE DEVELOPER ★ WEB ENTHUSIAST ★ MAKING COOL STUFF ★ ";
  const repeatedText = text.repeat(4);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 overflow-hidden bg-black py-2 border-b-4 border-black">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-sm font-mono font-bold">
          <span className="text-[#FFEB3B]">{repeatedText}</span>
          <span className="text-[#FF4081]">{repeatedText}</span>
        </span>
      </motion.div>
    </div>
  );
}
