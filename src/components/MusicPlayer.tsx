"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";

// 音乐列表
const playlist = [
  { title: "Young And Beautiful", artist: "Lana Del Rey", file: "/audio/young-and-beautiful.mp3" },
];

export default function MusicPlayer({ inline = false }: { inline?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setHasAudio(true);
    };

    const handleEnded = () => {
      nextTrack();
    };

    const handleError = () => {
      setHasAudio(false);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        // 确保音量设置正确
        audio.volume = isMuted ? 0 : volume;
        audio.muted = false;
        await audio.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.log("Audio playback failed:", error);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    audio.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const currentTime = audioRef.current?.currentTime || 0;

  return (
    <motion.div
      className={inline ? "relative" : "fixed bottom-6 left-6 z-50"}
      initial={{ y: inline ? 0 : 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: inline ? 0 : 1 }}
    >
      {/* 隐藏的音频元素 */}
      <audio ref={audioRef} src={playlist[currentTrack].file} preload="metadata" />

      <svg width="300" height="110" viewBox="0 0 300 110" fill="none">
        {/* Shadow */}
        <path d="M15 14 Q150 5 285 15 Q295 60 292 102 Q150 112 12 105 Q5 60 15 14" fill="#FFEB3B" opacity="0.6" />
        {/* Background */}
        <path d="M10 10 Q150 0 290 10 Q300 55 297 98 Q150 108 7 100 Q0 55 10 10" fill="#1a1a1a" />
        {/* Border */}
        <path d="M8 8 Q150 -2 292 8 Q303 55 300 100 Q150 112 5 102 Q-3 55 8 8" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
        
        {/* Album art */}
        <rect x="18" y="18" width="65" height="65" rx="6" fill="#FF4081" stroke="black" strokeWidth="2" />
        <motion.text
          x="35"
          y="58"
          fill="white"
          fontSize="28"
          animate={isPlaying ? { rotate: [0, 360] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          🎵
        </motion.text>
        
        {/* Vinyl effect when playing */}
        {isPlaying && (
          <motion.circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
        )}
        
        {/* Track info */}
        <text x="95" y="32" fill="white" fontSize="10" fontFamily="monospace">Now Playing:</text>
        <text x="95" y="47" fill="#CCFF00" fontSize="11" fontFamily="monospace" fontWeight="bold">
          {playlist[currentTrack].title}
        </text>
        <text x="95" y="60" fill="#FF4081" fontSize="9" fontFamily="monospace">
          {playlist[currentTrack].artist || ""}
        </text>
        
        {/* Time display */}
        <text x="95" y="68" fill="white" fontSize="9" fontFamily="monospace" opacity="0.6">
          {formatTime(currentTime)} / {formatTime(duration || 0)}
        </text>
      </svg>

      {/* Progress bar - clickable */}
      <div
        className="absolute left-[95px] top-[72px] w-[120px] h-[8px] bg-[#333] rounded cursor-pointer border border-black"
        onClick={handleProgressClick}
      >
        <motion.div
          className="h-full bg-[#00BCD4] rounded"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#00BCD4] shadow-md"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTrack}
          className="text-white/70 hover:text-white"
        >
          <SkipBack size={16} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          {isPlaying ? (
            <Pause size={18} fill="black" stroke="black" />
          ) : (
            <Play size={18} fill="black" stroke="black" className="ml-0.5" />
          )}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTrack}
          className="text-white/70 hover:text-white"
        >
          <SkipForward size={16} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMuted(!isMuted)}
          className="text-white/50 hover:text-white ml-1"
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </motion.button>
      </div>

      {/* 没有音频文件时的提示 */}
      {!hasAudio && (
        <div className="absolute -top-8 left-0 text-xs text-yellow-400 font-mono bg-black/80 px-2 py-1 rounded">
          💡 Put mp3 files in public/audio/
        </div>
      )}
    </motion.div>
  );
}
