import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="My Work" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/3 border border-white/8 flex flex-col h-full hover:border-primary/30 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.github} 
                    className="w-10 h-10 rounded-full bg-dark/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.demo} 
                    className="w-10 h-10 rounded-full bg-dark/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <a 
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors"
                >
                  View Case Study <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
