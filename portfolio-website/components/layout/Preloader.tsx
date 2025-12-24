"use client"

import { motion, Variants } from "framer-motion" // Added Variants import

export default function Preloader() {
  // 1. Properly type the text/logo variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.5, ease: [0.55, 0.06, 0.68, 0.19] } 
    }
  }

  // 2. Properly type the progress bar variants
  const barVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%", 
      transition: { duration: 3, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Example usage of variants */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-primary font-mono tracking-widest text-sm mb-4"
      >
        INITIALIZING_SYSTEM_CORE...
      </motion.div>
      
      <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          variants={barVariants}
          initial="hidden"
          animate="visible"
          className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
        />
      </div>
    </motion.div>
  )
}