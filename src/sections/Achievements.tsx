import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { ACHIEVEMENTS } from '../constants';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Certifications & Milestones" 
          subtitle="Achievements" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-[2rem] bg-white/3 border border-white/8 hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Award size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.organization}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-white/20 font-display font-bold text-xl">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
