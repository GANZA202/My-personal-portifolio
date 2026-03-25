import React from 'react';
import { motion } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="What I Offer" 
          subtitle="Services" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="p-10 rounded-[2.5rem] bg-white/3 border border-white/8 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
