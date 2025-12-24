"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Terminal, Sparkles, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Lets Connect
              </span>
            </div>
          </motion.div>

          {/* Main Header */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white"
          >
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary drop-shadow-2xl">
                DIGITAL FUTURE
            </span>
          </motion.h1>

          {/* Bio based on your Resume Details */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              I am <span className="text-white font-bold">Abhinav Singh Bhadouria</span>.
              A Backend Architect specializing in <span className="text-primary font-bold">isolated execution environments</span> and <span className="text-accent font-bold">applied ML</span>.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Navigates to <section id="projects"> */}
            <Button size="lg" asChild className="h-14 px-8 rounded-full bg-primary text-black font-bold uppercase tracking-widest hover:neo-glow transition-all group relative overflow-hidden border-none cursor-pointer">
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>

            {/* Downloads /public/resume.pdf */}
            <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-full border-white/10 glass font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-white">
              <a href="/resume.pdf" download="Abhinav_Singh_Bhadouria_Resume.pdf" className="flex items-center gap-2">
                <Download className="h-4 w-4 text-primary" />
                Acquire CV
              </a>
            </Button>
          </motion.div>

          {/* Quick Stats Grid (LeetCode & Problems) */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-8 opacity-50"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white">600+</span> 
              <span className="text-[10px] uppercase tracking-widest font-bold">Problems Solved</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white">1750+</span> 
              <span className="text-[10px] uppercase tracking-widest font-bold">LeetCode Rating</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white">8.19</span> 
              <span className="text-[10px] uppercase tracking-widest font-bold">Current CGPA</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  )
}