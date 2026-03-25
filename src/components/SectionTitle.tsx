import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, className, align = 'center' }: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-medium tracking-widest uppercase text-xs mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full",
          align === 'center' ? "mx-auto" : "mr-auto"
        )}
      />
    </div>
  );
}
