import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-web3-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-celo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-celo-500"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-web3-500 to-celo-400">
              DApp Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.tagline || "I build beautiful, interactive, and secure decentralized applications using modern web technologies and blockchain integration."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-web3-600 hover:bg-web3-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-web3-900/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <div className="pt-12 flex items-center justify-center gap-6 text-slate-500">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;