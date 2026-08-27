import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProjectCard, ProjectModal } from './components/ProjectCard';
import CertificationCard, { CertificationModal } from './components/CertificationCard';
import AboutMe from './components/AboutMe';
import InnovationHub from './components/InnovationHub';
import Footer from './components/Footer';
import { PROJECTS, CERTIFICATIONS } from './data';
import { Project, ProjectType, Certification } from './types';

export default function App() {
  const [activePath, setActivePath] = useState<ProjectType>('developer');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredProjects = PROJECTS.filter(p => p.type === activePath);

  return (
    <div className="min-h-screen selection:bg-neon-pink/30 bg-cyber-black">
      <Navbar />
      
      <main>
        <Hero activePath={activePath} setActivePath={setActivePath} />

        {/* Projects Section */}
        <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-white mb-2">Featured Work</h2>
              <p className="text-cyber-light/50 font-light">Selected projects from my {activePath === 'developer' ? 'engineering' : 'design'} journey.</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-pink neon-glow">Scroll to explore</span>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <AboutMe />

        {/* Credentials Section */}
        <section id="credentials" className="py-24 px-6 bg-cyber-gray/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-neon-pink font-semibold mb-4 block neon-glow">Validation</span>
              <h2 className="text-4xl font-serif text-white">Certifications & Credentials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <CertificationCard 
                  key={cert.id} 
                  cert={cert} 
                  onExpand={(c) => setSelectedCert(c)}
                />
              ))}
            </div>
          </div>
        </section>

        <InnovationHub />
      </main>

      <Footer />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <CertificationModal 
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </div>
  );
}
