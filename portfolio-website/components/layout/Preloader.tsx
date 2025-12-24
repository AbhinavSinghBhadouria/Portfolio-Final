"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Preloader() {
  const [percent, setPercent] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)
    return () => clearInterval(interval)
  }, [])

  // If we aren't on the client yet, render a black screen to avoid hydration mismatch
  if (!isMounted) return <div className="fixed inset-0 z-[1000] bg-[#030303]" />

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(50% 0 50% 0)", 
        transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] } 
      }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#030303] text-white overflow-hidden"
    >
      {/* 1. Scrolling Log Stream - Now Safe from Hydration Errors */}
      <div className="absolute inset-0 opacity-[0.05] font-mono text-[9px] leading-tight select-none pointer-events-none overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div 
            key={i}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: i * 0.05 }}
          >
            {/* We can now safely use Math.random because this only runs on the client */}
            {`> FETCH_METADATA_BLOCK_${i} ... [0x${Math.random().toString(16).slice(2, 6).toUpperCase()}] ... STATUS_OK`}
          </motion.div>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* 2. HUD Circle */}
        <div className="relative h-64 w-64 flex items-center justify-center">
          <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
            <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="0.5" fill="transparent" className="text-white/10" />
            <motion.circle
              cx="128"
              cy="128"
              r="110"
              stroke="var(--primary)"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="691"
              initial={{ strokeDashoffset: 691 }}
              animate={{ strokeDashoffset: 691 - (691 * percent) / 100 }}
              transition={{ ease: "linear", duration: 0.1 }}
              style={{ filter: "drop-shadow(0 0 12px var(--primary))" }}
            />
          </svg>
          
          <div className="text-center z-10">
            <motion.span className="text-7xl font-black tracking-tighter block font-mono">
              {percent}
            </motion.span>
            <span className="text-[10px] tracking-[0.8em] uppercase text-primary font-bold">
              {percent < 100 ? "Analyzing" : "Access Granted"}
            </span>
          </div>
        </div>

        {/* 3. Status Log */}
        <div className="mt-12 w-80 text-[9px] font-mono text-white/40 border-l border-primary/50 pl-4 py-2">
          <p className="animate-pulse">{`> ENCRYPTED_HANDSHAKE: COMPLETE`}</p>
          <p className="opacity-60">{`> PORTFOLIO_V2.0: LOADING_ASSETS`}</p>
          <p className="text-primary">{`> BYTES_TRANSFERRED: ${percent * 1024} KB`}</p>
        </div>
      </div>
    </motion.div>
  )
}