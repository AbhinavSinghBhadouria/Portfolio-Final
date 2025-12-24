"use client"

import { motion, Variants } from "framer-motion" // Added Variants import
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Layers } from "lucide-react"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export default function Projects() {
  // 1. Properly type the container variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] // Added explicit ease for build stability
      }
    }
  }

  // 2. Properly type the item variants
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // Added explicit ease for build stability
      } 
    }
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            <Layers className="h-3 w-3" />
            <span>Portfolio Selection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient mb-6 text-white">
            Featured Works
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A collection of high-performance applications focused on <span className="text-foreground font-medium text-white">scalability</span>, <span className="text-foreground font-medium text-white">security</span>, and <span className="text-foreground font-medium text-white">technical excellence</span>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="group">
              <Card className="h-full bg-[#0a0a0a]/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                
                {/* Project Image / Visual Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {project.metrics && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-primary/20 text-primary border-primary/40 backdrop-blur-md text-[9px] font-bold uppercase py-1">
                        {project.metrics}
                      </Badge>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="glass border-white/10 text-[10px] font-bold uppercase tracking-tighter py-1 bg-black/50 backdrop-blur-md text-white">
                      {project.id === 3 ? "Machine Learning" : "Full Stack"}
                    </Badge>
                  </div>
                  
                  <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-10" />
                </div>

                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-white/5">
                    <Button variant="ghost" size="sm" className="flex-1 rounded-xl border border-white/5 text-white hover:bg-primary hover:text-black transition-all group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Source
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 rounded-xl bg-white/5 text-white hover:bg-white/10 border border-white/10" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Launch
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}