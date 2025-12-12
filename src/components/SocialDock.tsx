"use client";

import { motion } from "framer-motion";
import { Github, Mail, Coffee } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/multi-zhangyang", color: "#333", label: "GitHub" },
  { icon: Mail, href: "mailto:hi@zhangyang.dev", color: "#FF4081", label: "Email" },
  { icon: Coffee, href: "https://buymeacoffee.com", color: "#FFEB3B", label: "Coffee" },
];

export default function SocialDock({ inline = false }: { inline?: boolean }) {
  // 横向布局（inline模式）- 手绘风格
  if (inline) {
    return (
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none" className="absolute -z-10">
          <path d="M10 8 Q90 4 170 12 Q176 30 173 52 Q90 58 10 54 Q4 30 10 8" fill="white" opacity="0.9" />
          <path d="M8 6 Q90 0 172 10 Q180 30 176 54 Q90 62 6 56 Q-2 30 8 6" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>

        <div className="flex gap-4 px-6 py-3">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ backgroundColor: social.color }}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <social.icon size={20} className="text-white" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    );
  }

  // 竖向布局（固定侧边栏）
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <svg width="60" height="180" viewBox="0 0 60 180" fill="none" className="absolute -z-10">
        <path d="M8 10 Q30 4 52 12 Q58 90 55 168 Q30 176 8 170 Q2 90 8 10" fill="white" opacity="0.9" />
        <path d="M6 8 Q30 0 54 10 Q62 90 58 172 Q30 182 6 174 Q-2 90 6 8" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>

      <div className="flex flex-col gap-4 py-6 px-3">
        {socials.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            style={{ backgroundColor: social.color }}
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
          >
            <social.icon size={20} className="text-white" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
