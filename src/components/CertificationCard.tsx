import { motion, AnimatePresence } from 'motion/react';
import { Certification } from '../types';
import { Award, Maximize2, X } from 'lucide-react';

export interface CertificationCardProps {
  cert: Certification;
  onExpand: (cert: Certification) => void;
}

export default function CertificationCard({
  cert,
  onExpand,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-2xl bg-cyber-gray border border-white/5 shadow-sm flex items-start gap-4 group hover:border-neon-pink/30 transition-colors cursor-pointer"
      onClick={() => onExpand(cert)}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center text-neon-pink shrink-0 border border-neon-pink/20">
        <Award size={24} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4 mb-1">
          <h4 className="font-serif text-lg text-white leading-tight">
            {cert.title}
          </h4>

          <span className="text-xs text-white/40 font-mono whitespace-nowrap">
            {cert.date}
          </span>
        </div>

        <p className="text-sm text-cyber-light/60 mb-3">
          {cert.issuer}
        </p>

        {cert.link && (
          <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-neon-pink group-hover:text-electric-blue transition-colors neon-glow">
            Expand View
            <Maximize2 size={10} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export function CertificationModal({
  cert,
  onClose,
}: CertificationModalProps) {
  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-cyber-black/95 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-cyber-gray w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 flex flex-col"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certification preview"
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-neon-pink/20 flex items-center justify-center text-cyber-light hover:text-neon-pink transition-colors border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12 flex flex-col items-center overflow-y-auto">
              {/* Header */}
              <div className="text-center mb-8 pr-10">
                <span className="text-xs uppercase tracking-widest text-neon-pink font-semibold mb-2 block neon-glow">
                  Official Credential
                </span>

                <h2 className="text-3xl font-serif text-white">
                  {cert.title}
                </h2>

                <p className="text-cyber-light/60">
                  {cert.issuer} • {cert.date}
                </p>
              </div>

              {/* Certificate */}
              <div className="w-full aspect-[1.414/1] bg-cyber-black rounded-xl overflow-hidden border border-white/5 relative">
                <img
                  src={cert.link}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-neon-pink/5 pointer-events-none" />
              </div>

              {/* Footer */}
              <p className="mt-6 text-xs text-cyber-light/30 uppercase tracking-[0.2em]">
                Verified Digital Record
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}