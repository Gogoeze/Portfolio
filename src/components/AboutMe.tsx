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
              src="https://picsum.photos/seed/portrait/800/1000"
              alt="Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
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
              A journey from <span className="italic">syntax</span> to <span className="text-neon-pink neon-glow">substance</span>.
            </h2>
            <div className="space-y-6 text-cyber-light/70 leading-relaxed font-light text-lg">
              <p>
                I started in Computer Engineering, then sharpened that foundation at AltSchool Africa's Frontend Engineering program — learning to turn interfaces into something people actually enjoy using, not just something that works.
              </p>
              <p>
                Since then I've built production dashboards where the stakes are real: seller onboarding flows, KYC verification wizards, wallets, storefront builders — the kind of screens where a broken edge case costs someone money, not just a bad review.
              </p>
              <p>
                I care as much about the API contract behind a button as the button itself. That's the substance part — code that holds up once real users and real data hit it.
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
