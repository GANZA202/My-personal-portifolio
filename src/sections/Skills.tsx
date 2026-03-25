import React from 'react';
import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My Toolbox" 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white/3 border border-white/8 flex flex-col items-center justify-center text-center transition-all hover:bg-white/5 hover:border-primary/30"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                {skill.isLucide ? (
                  <skill.icon size={48} className="text-primary" />
                ) : (
                  <img src={skill.icon as string} alt={skill.name} className="w-full h-full object-contain" />
                )}
              </div>
              <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
              
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
              <span className="text-[10px] text-white/40 mt-2 uppercase tracking-widest">{skill.level}% Proficiency</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
