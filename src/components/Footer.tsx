import React from 'react';
import { ChevronUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter mb-4 block">
              PRINCE<span className="text-primary">.</span>
            </a>
            <p className="text-white/40 text-sm">
              Built with React.js & Framer Motion by Ngendo Prince.
            </p>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all group"
          >
            <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ngendo Prince. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
