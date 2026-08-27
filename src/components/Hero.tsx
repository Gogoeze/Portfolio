import { motion } from 'motion/react';
import { ProjectType } from '../types';

interface HeroProps {
  activePath: ProjectType;
  setActivePath: (path: ProjectType) => void;
}

export default function Hero({ activePath, setActivePath }: HeroProps) {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neon-pink font-semibold mb-6 block neon-glow">
            Computer Engineer & Industrial/Product Designer
          </span>
          <h1 className="text-5xl mdi still :text-8xl font-serif leading-[1.1] mb-8 text-balance text-cyber-light">
            <span className="text-neon-pink neon-glow">EzeOgali</span> <span className="italic">Ugomma Esosa</span>.
          </h1>
          <p className="text-lg md:text-xl text-cyber-light/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Engineering Seamless Interaction through logic and human-centered aesthetic design.
          </p>
        </motion.div>

        {/* Dual Path Toggle */}
        <div className="flex p-1 bg-cyber-gray rounded-full relative w-full max-w-md neon-border">
          <motion.div
            className="absolute top-1 bottom-1 bg-neon-pink rounded-full shadow-lg z-0"
            initial={false}
            animate={{
              left: activePath === 'developer' ? '4px' : '50%',
              right: activePath === 'developer' ? '50%' : '4px',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <button
            onClick={() => setActivePath('developer')}
            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-widest z-10 transition-colors ${
              activePath === 'developer' ? 'text-white' : 'text-cyber-light/40'
            }`}
          >
            The Developer
          </button>
          <button
            onClick={() => setActivePath('designer')}
            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-widest z-10 transition-colors ${
              activePath === 'designer' ? 'text-white' : 'text-cyber-light/40'
            }`}
          >
            The Designer
          </button>
        </div>
      </div>
    </section>
  );
}
