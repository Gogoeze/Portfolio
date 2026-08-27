export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-cyber-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl font-semibold text-white mb-2">EZEOGALI <span className="text-neon-pink neon-glow">UGOMMA</span> ESOSA</p>
          <p className="text-xs text-cyber-light/40 uppercase tracking-widest font-medium">© 2024 • Frontend web developer</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#contact" className="text-xs tracking-widest font-bold text-cyber-light/60 hover:text-neon-pink transition-colors">ugommaezeogali@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
