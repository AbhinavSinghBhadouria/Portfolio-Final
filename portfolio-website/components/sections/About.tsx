"use client"

import { motion, Variants } from "framer-motion" // Added Variants import
import { Code2, Cpu, Globe, Sparkles, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export default function About() {
  // 1. Defining Variants to satisfy TypeScript
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Backend Engineering",
      description: "Designing secure, isolated execution environments using Docker for fault-tolerant systems.",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "hover:border-blue-500/50"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Algorithmic Depth",
      description: "Top 15% LeetCode rating (1681) with 500+ problems solved across various platforms.",
      color: "from-purple-500/20 to-pink-500/20",
      border: "hover:border-purple-500/50"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Systems Architect",
      description: "Scaling intelligent apps from ML models to modular, high-performance API architectures.",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "hover:border-emerald-500/50"
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>The Profile</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual/Photo Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Added explicit ease
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
              <img 
                src="/Profile.jpeg" 
                alt="Abhinav Singh Bhadouria" 
                className="object-cover w-full h-full hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              
              {/* Animated Scanline Overlay */}
              <motion.div 
                initial={{ top: "-100%" }}
                animate={{ top: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "linear" // Explicitly set to linear for consistent scanning
                }}
                className="absolute left-0 w-full h-[2px] bg-primary/30 blur-sm pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Added explicit ease
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Engineering <span className="text-primary">Reliable Futures</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am <span className="text-foreground font-semibold text-white">Abhinav Singh Bhadouria</span>, a Computer Science undergraduate at PSIT. I specialize in building <span className="text-primary font-medium">high-performance backend systems</span> and <span className="text-accent font-medium">applied machine learning</span>. My focus is on reducing latency, optimizing performance, and solving complex technical problems through modular engineering.
              </p>
            </div>

            {/* Technical Milestones Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl border-white/5 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500" />
                <p className="relative text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Academics</p>
                <p className="relative text-xl font-bold text-primary">8.19 CGPA</p> 
              </div>
              <div className="glass p-4 rounded-xl border-white/5 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500" />
                <p className="relative text-[10px] uppercase tracking-widest text-muted-foreground mb-1">DSA Rating</p>
                <p className="relative text-xl font-bold text-accent">1750+ (Top 10%)</p> 
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className={cn(
                    "group relative p-6 rounded-2xl glass transition-all border border-white/5",
                    feature.border
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn("p-3 rounded-xl bg-gradient-to-br transition-colors", feature.color)}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}