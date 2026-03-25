import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    alert('Thank you for your message! This is a demo form.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Contact" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:princeganza27@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">princeganza27@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Me</p>
                  <div className="flex flex-col">
                    <a href="tel:+250793216848" className="text-lg font-bold hover:text-primary transition-colors">
                      <span className="text-sm font-medium text-white/40 mr-2">MTN:</span> 0793216848
                    </a>
                    <a href="tel:+250725891435" className="text-lg font-bold hover:text-primary transition-colors">
                      <span className="text-sm font-medium text-white/40 mr-2">Airtel:</span> 0725891435
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold">Kimironko, Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-[2.5rem] bg-white/3 border border-white/8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/60 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/60 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">Your Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 glow-primary hover:scale-[1.02] transition-all active:scale-[0.98]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
