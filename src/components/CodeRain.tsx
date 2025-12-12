"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippets = [
  "const x = 42;",
  "return true;",
  "if (cool) {",
  "} else {",
  "useState()",
  "async/await",
  "npm install",
  "git commit",
  "console.log",
  "export default",
  "import React",
  "function()",
  "=> arrow",
  "let data =",
  ".map(x =>",
  ".filter()",
  "try { }",
  "catch(e)",
  "Promise",
  "fetch(url)",
];

interface CodeDrop {
  id: number;
  text: string;
  x: number;
  duration: number;
  delay: number;
}

export default function CodeRain() {
  const [drops, setDrops] = useState<CodeDrop[]>([]);

  useEffect(() => {
    const initialDrops: CodeDrop[] = [];
    for (let i = 0; i < 15; i++) {
      initialDrops.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
      });
    }
    setDrops(initialDrops);
  }, []);

  return (
    <div className="fixed inset-0 z-[-8] pointer-events-none overflow-hidden opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-xs font-mono text-gray-500 whitespace-nowrap"
          style={{ left: `${drop.x}%` }}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {drop.text}
        </motion.div>
      ))}
    </div>
  );
}
