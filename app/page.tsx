"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ChatBot from "@/components/sections/ChatBot";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero usually has its own entrance animation, so we keep it separate */}
      <Hero />

      {/* Wrapping the rest in a motion div for consistent scroll reveals */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 space-y-32"
      >
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section id="contact" className="scroll-mt-20 pb-20">
          <Contact />
        </section>
      </motion.div>

      {/* Floating ChatBot */}
      <ChatBot />
    </div>
  );
}