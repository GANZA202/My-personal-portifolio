import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Code2, Layers, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const cards = [
    { icon: MapPin, label: 'Based in', value: 'Kimironko, Kigali, Rwanda' },
    { icon: Code2, label: 'Specialty', value: 'Front-End Development' },
    { icon: Layers, label: 'Main Stack', value: 'HTML, CSS, JS, React' },
    { icon: Zap, label: 'Status', value: 'Available for freelance' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me" 
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-2xl md:text-3xl text-white/90 font-display leading-relaxed mb-8">
              I am a young passionate developer and creative coder dedicated to building modern websites and user-friendly interfaces.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Based in <span className="text-primary font-semibold">Kimironko, Kigali, Rwanda</span>, my journey in tech is driven by a deep curiosity for how things work and a desire to create digital experiences that are both beautiful and functional.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              With a strong focus on React.js and modern web technologies, I combine technical expertise with a creative problem-solving mindset. I believe that great software is built at the intersection of clean code and thoughtful design. I'm always learning and improving my skills to stay at the forefront of the ever-evolving web development landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Creativity</div>
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Problem Solving</div>
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Learning Mindset</div>
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Attention to Detail</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="p-6 rounded-2xl bg-white/3 border border-white/8 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white/40 text-xs font-medium mb-0.5 uppercase tracking-wider">{card.label}</h3>
                    <p className="text-white font-semibold">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
