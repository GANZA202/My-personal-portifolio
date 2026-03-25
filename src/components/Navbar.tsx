import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-dark/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          PRINCE<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    activeLink === link.href ? "text-primary" : "text-white/70"
                  )}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-white/70 hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={cn(
                      "text-lg font-medium block",
                      activeLink === link.href ? "text-primary" : "text-white/70"
                    )}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
