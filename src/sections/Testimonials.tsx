import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Client Feedback" 
          subtitle="Testimonials" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/3 border border-white/8 flex flex-col relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/20" size={40} />
              
              <p className="text-white/80 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
