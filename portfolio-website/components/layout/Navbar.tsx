"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-in-out",
          scrolled 
            ? "w-full md:w-[70%] lg:w-[60%] glass border-white/10 shadow-2xl" 
            : "w-full md:w-[90%] bg-transparent"
        )}
      >
        {/* Logo Monogram */}
        <Link href="/" className="group relative flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-black rotate-3 group-hover:rotate-0 transition-transform">
            AB
          </div>
          <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">
            Abhinav<span className="text-primary">...</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-secondary/20 rounded-full px-2 py-1 border border-white/5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all relative group"
            >
              <span className="relative z-10">{item.name}</span>
              <motion.span 
                className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="nav-hover"
              />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-white/10">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/20" asChild>
              <a href="https://github.com/AbhinavSinghBhadouria" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/20" asChild>
              <a href="https://www.linkedin.com/in/abhibhadouria08/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
            </Button>
          </div>
          
          <Button size="sm" className="rounded-full px-5 font-bold hidden md:flex hover:neo-glow transition-all bg-primary text-black" asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 p-6 md:hidden pointer-events-auto"
          >
            <div className="w-full h-full glass rounded-3xl p-10 flex flex-col items-center justify-center gap-8 bg-black/90">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}