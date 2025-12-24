"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate system processing
    await new Promise(resolve => setTimeout(resolve, 1200))

    const recipient = "abhinavsinghbhadouria.cs@gmail.com"
    const subject = `Inquiry from ${formData.name} via Portfolio`
    const body = `Hello Abhinav,\n\nMessage from: ${formData.name} (${formData.email})\n\n${formData.message}`
    
    // Trigger Gmail Redirect
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "abhinavsinghbhadouria.cs@gmail.com", 
      color: "text-blue-500",
      href: "mailto:abhinavsinghbhadouria.cs@gmail.com"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 9569376728", 
      color: "text-purple-500",
      href: "tel:+919569376728"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Kanpur, UP, India", 
      color: "text-emerald-500",
      href: "https://maps.google.com/?q=Kanpur"
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Availability Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ready for Internships
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient mb-6">
            Let's build the future.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Contact Details (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-muted-foreground">Feel free to reach out for collaborations or technical inquiries.</p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-white/10 transition-all"
                >
                  <div className={cn("p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors", item.color)}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{item.label}</p>
                    <p className="text-lg font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent blur-3xl -z-10" />
            
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2rem] border-white/10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1 text-white">Full Name</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Abhinav Singh" 
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1 text-white">Email Address</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="abhinav@example.com" 
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest ml-1 text-white">Message</label>
                <Textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..." 
                  className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px] rounded-xl transition-all resize-none text-white"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl font-bold uppercase tracking-widest bg-primary text-black hover:neo-glow transition-all group"
              >
                {isSubmitting ? "Syncing..." : "Launch Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}