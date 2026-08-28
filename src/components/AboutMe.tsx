import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-cyber-gray relative z-10 border border-white/5"
          >
            <img
              src="/Portrait.jpeg"
              alt="Portrait"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-neon-pink/20 rounded-full z-0 animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl z-0" />
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-neon-pink font-semibold mb-6 block neon-glow">The Narrative</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-white">
              Driven by code, engineered for scalable <span className="text-neon-pink neon-glow font-medium">software solutions</span>.            </h2>
            <div className="space-y-6 text-cyber-light/80 leading-relaxed font-light text-lg">
              <p>
                My background in Computer Engineering gave me a strong technical foundation, but it was during my Industrial Training (IT) that I discovered my passion for building software layers.
              </p>
              <p>
                I leveraged that momentum through my NYSC year, expanding my stack and diving into live codebases. Over the past two years, I have been engineering production-ready applications as a full-time software developer.
              </p>
              <p>
                Throughout this journey, I have focused on building complex user interfaces, managing application states, and integrating secure API workflows. I build clean, reliable code structures designed to handle data efficiently and scale seamlessly for users.
              </p>
            </div>

            <div id="contact" className="mt-12 pt-12 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-6">Connect with me</h4>
              <div className="flex gap-6">
                <a href="mailto:ugommaezeogali@gmail.com" className="text-cyber-light hover:text-neon-pink transition-colors"><Mail size={24} /></a>
                <a href="https://www.linkedin.com/in/ugomma-ezeogali-9a0595331" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-neon-pink transition-colors"><Linkedin size={24} /></a>
                <a href="https://github.com/Gogoeze/" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-neon-pink transition-colors"><Github size={24} /></a>
                {/* <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-neon-pink transition-colors"><Instagram size={24} /></a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
