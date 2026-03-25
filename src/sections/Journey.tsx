import React from 'react';
import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import { JOURNEY } from '../constants';

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="My Coding Journey" 
          subtitle="Experience" 
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {JOURNEY.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark -translate-x-1/2 z-10 hidden md:block" />

                <div className="w-full md:w-1/2 p-6">
                  <div className={`p-8 rounded-3xl bg-white/3 border border-white/8 hover:border-primary/30 transition-all ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-primary font-bold text-2xl mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
