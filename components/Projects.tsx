import React from 'react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-24 relative">
       {/* Background accent */}
       <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-web3-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Real-world applications demonstrating full-stack architecture and blockchain integration.
          </p>
        </div>

        <div className="space-y-20">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              {/* Project Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-xl border border-slate-700/50 shadow-2xl bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white font-display">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded bg-web3-900/30 text-web3-300 border border-web3-900/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 pt-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-celo-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-web3-600 hover:bg-web3-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-web3-900/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
