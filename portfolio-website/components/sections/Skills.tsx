"use client"

import { motion, Variants } from "framer-motion" // Added Variants import
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"
import { Cpu, Globe, Database, Layout, Terminal, PenTool } from "lucide-react"
import { cn } from "@/lib/utils"

// Mapping icons to categories
const categoryIcons: Record<string, any> = {
  "Frontend": <Layout className="h-5 w-5" />,
  "Backend": <Database className="h-5 w-5" />,
  "Tools": <Terminal className="h-5 w-5" />,
  "Design": <PenTool className="h-5 w-5" />,
  "Default": <Cpu className="h-5 w-5" />,
}

export default function Skills() {
  // 1. Defined typed variants for the grid items
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (idx: number) => ({
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: idx * 0.1,
        duration: 0.5,
        ease: "easeOut" // Explicitly defined ease for build stability
      }
    })
  }

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            <Globe className="h-3 w-3" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient mb-6 text-white">
            Tech Stack
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              custom={idx} // Passing index to the variant function
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative glass p-8 rounded-2xl border-white/5 h-full flex flex-col bg-black/40">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    {categoryIcons[category.category] || categoryIcons.Default}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 hover:bg-primary hover:text-black hover:border-primary transition-all cursor-default text-white/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Decorative "Scanning" Line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}