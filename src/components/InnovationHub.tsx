import { motion } from 'motion/react';
import { INNOVATION_HIGHLIGHT } from '../data';
import { Lightbulb } from 'lucide-react';

export default function InnovationHub() {
  return (
    <section className="py-24 px-6 bg-cyber-black text-cyber-light overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-3xl bg-neon-pink/10 flex items-center justify-center text-neon-pink mb-8 border border-neon-pink/20 shadow-[0_0_20px_rgba(255,0,127,0.2)]"
          >
           <span></span> <Lightbulb size={48} />
          </motion.div>
          <h2 className="text-4xl font-serif mb-4 text-white">Innov8 <span className="italic text-neon-pink neon-glow">Hub</span></h2>
          <p className="text-cyber-light/60 font-light">Contributing time and creative skills to community projects through collaboration and design.</p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-cyber-gray border border-white/5 hover:border-neon-pink/30 transition-colors"
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-neon-pink mb-4 neon-glow">The Role</h4>
            <p className="text-xl font-serif mb-2 text-white">{INNOVATION_HIGHLIGHT.role}</p>
            <p className="text-cyber-light/70 font-light leading-relaxed">{INNOVATION_HIGHLIGHT.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-cyber-gray border border-white/5 hover:border-neon-pink/30 transition-colors"
          >
            <h4 className="text-xs uppercase tracking-widest font-bold text-neon-pink mb-4 neon-glow">The Impact</h4>
            <p className="text-cyber-light/70 font-light leading-relaxed">{INNOVATION_HIGHLIGHT.impact}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
