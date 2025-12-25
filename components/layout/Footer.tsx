"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-IN", { 
        timeZone: "Asia/Kolkata",
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            System: Operational
          </span>
          <span className="hidden sm:block border-l border-white/10 pl-4">
            Lat: 26.4499° N | Long: 80.3319° E
          </span>
        </div>
        
        <div className="text-center text-white/40">
          © 2025 Abhinav Singh Bhadouria // Build_v2.0.25
        </div>

        <div className="flex items-center gap-4">
          <span>Local_Time: {time} IST</span>
        </div>
      </div>
    </footer>
  )
}