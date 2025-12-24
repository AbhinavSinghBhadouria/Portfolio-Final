"use client";

import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-background/50 backdrop-blur-md">
      {/* Subtle Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient">
              AB<span className="text-primary">.</span>
            </Link>
            <p className="max-w-xs text-muted-foreground leading-relaxed">
              Architecting digital interfaces where aesthetics meet high-performance engineering.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Github, href: "https://github.com/AbhinavSinghBhadouria" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/abhibhadouria08/" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Mail, href: "mailto:abhinavsinghbhadouria.cs@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-full glass border-white/5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h3>
            <ul className="space-y-4">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Status</h3>
            <div className="flex items-center space-x-3 group">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
                <div className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-muted-foreground group-hover:text-emerald-400 transition-colors">
                Available for projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground tracking-wide">
            &copy; {currentYear} <span className="text-foreground font-medium">Abhinav Singh Bhadouria</span>. Built with Next.js 15
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}