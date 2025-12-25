"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/experience"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Professional Path
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Futuristic Timeline Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          {experience.map((exp, index) => (
            <div key={index} className="relative mb-20 last:mb-0">
              {/* Timeline Node Icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                </motion.div>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10"
                >
                  <Card className="glass group hover:border-primary/50 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-medium text-muted-foreground mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/50 text-xs font-bold">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="bg-primary/5 border-primary/10 text-[10px] uppercase font-bold"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Empty Side (For balance in desktop view) */}
                <div className="hidden md:block w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}