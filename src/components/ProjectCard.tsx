import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className={`cursor-pointer rounded-3xl overflow-hidden ${project.color} group relative aspect-[4/5] md:aspect-square border border-white/5 hover:border-neon-pink/50 transition-colors duration-500`}
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-cyber-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-neon-pink text-xs uppercase tracking-widest mb-2 font-medium neon-glow">
              {project.type === 'developer' ? 'Front-End Engineering' : 'Industrial Design'}
            </p>
            <h3 className="text-2xl text-white font-serif leading-tight">{project.title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-neon-pink/20 backdrop-blur-md flex items-center justify-center text-neon-pink border border-neon-pink/30">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
      
      <img 
        src={project.images[0]} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-cyber-black/90 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`project-${project.id}`}
          className="bg-cyber-gray w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row border border-white/10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-neon-pink/20 flex items-center justify-center text-cyber-light hover:text-neon-pink transition-colors border border-white/10"
          >
            <X size={20} />
          </button>

          {/* Left: Images */}
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-y-auto bg-cyber-black">
            {project.images.map((img, i) => (
              <img 
                key={i}
                src={img} 
                alt={`${project.title} ${i + 1}`}
                className="w-full h-auto object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-neon-pink font-semibold mb-3 block neon-glow">
                {project.type === 'developer' ? 'The Developer' : 'The Designer'}
              </span>
              <h2 className="text-4xl font-serif text-white mb-4">{project.title}</h2>
              <p className="text-lg text-cyber-light/80 leading-relaxed font-light italic">
                {project.summary}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-3">Audience & Use Case</h4>
                <p className="text-cyber-light/70 leading-relaxed">{project.audience}</p>
              </section>

              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-3">Research & Process</h4>
                <p className="text-cyber-light/70 leading-relaxed">{project.researchProcess}</p>
              </section>

              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-3">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-neon-pink border border-neon-pink/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
