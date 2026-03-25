import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowRight, Download, ChevronDown, Zap } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Building modern websites and user-friendly interfaces.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium mb-6 tracking-wider uppercase">
            Available for freelance / collaborations
          </span>
          
          <div className="relative mb-8 inline-block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 glow-primary mx-auto flex items-center justify-center bg-white/5 backdrop-blur-sm"
            >
              <span className="text-4xl md:text-6xl font-bold text-gradient">NP</span>
            </motion.div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-dark flex items-center justify-center animate-bounce">
              <Zap size={14} className="text-dark" />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            I'm <span className="text-gradient">Ngendo Prince</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-display font-medium text-white/80 mb-8">
            Front-End Developer <span className="text-primary mx-2">/</span> React Developer <span className="text-primary mx-2">/</span> Creative Coder
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 min-h-[3rem]">
            {text}<span className="animate-pulse text-primary">|</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 glow-primary transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.a>
            
            <motion.a 
              href="#" // Replace with real CV link
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white/70 hover:text-white rounded-full font-semibold flex items-center gap-2 transition-all"
            >
              Download CV <Download size={18} />
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, color: '#3b82f6' }}
                className="text-white/40 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
