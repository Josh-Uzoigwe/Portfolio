import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import ProjectVisual from './ProjectVisual';

type FilterOption = 'All' | ProjectCategory;

const FILTERS: FilterOption[] = [
  'All',
  'Full-Stack',
  'Frontend',
  'Mobile',
  'Blockchain',
  'AI & Tools',
];

const categoryBadgeClass = (category: ProjectCategory) => {
  switch (category) {
    case 'Full-Stack':
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
    case 'Frontend':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
    case 'Mobile':
      return 'bg-sky-500/10 text-sky-300 border-sky-500/20';
    case 'Blockchain':
      return 'bg-violet-500/10 text-violet-300 border-violet-500/20';
    case 'AI & Tools':
      return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
  }
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return (
      p.category === activeFilter ||
      p.secondaryCategories?.includes(activeFilter)
    );
  });

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 sm:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2.5">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Projects
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Recent work
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              A mix of client work, my final-year university project, hackathon entries, and small
              tools I built for myself.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-white/[0.07] self-start"
            role="tablist"
            aria-label="Filter projects by discipline"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-zinc-100 text-zinc-950'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 1 full-width spotlight + 6 in 3x2 grid when viewing All */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const isSpotlight = Boolean(project.featured && activeFilter === 'All');

            return (
              <article
                key={project.id}
                className={`surface-card surface-card-hover rounded-2xl overflow-hidden ${
                  isSpotlight
                    ? 'md:col-span-2 grid md:grid-cols-12'
                    : 'flex flex-col'
                }`}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer ${
                    isSpotlight ? 'md:col-span-6 flex' : ''
                  }`}
                >
                  <ProjectVisual type={project.visualType} spotlight={isSpotlight} />
                </div>

                <div
                  className={`p-6 flex-1 flex flex-col ${
                    isSpotlight ? 'md:col-span-6 md:p-8' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {isSpotlight && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md border bg-white/[0.06] text-zinc-200 border-white/15">
                          Flagship
                        </span>
                      )}
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${categoryBadgeClass(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                      {project.secondaryCategories?.map((cat) => (
                        <span
                          key={cat}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${categoryBadgeClass(
                            cat
                          )}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-zinc-500">{project.year}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-left group cursor-pointer focus:outline-none"
                  >
                    <h3 className="font-display text-xl font-bold text-zinc-50 tracking-tight group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </button>
                  <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>What I built</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Accessible Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl bg-[#111114] border border-white/12 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/[0.08] flex items-start justify-between gap-4 shrink-0">
              <div>
                <p className="font-mono text-xs text-emerald-400">
                  {selectedProject.category} · {selectedProject.year}
                </p>
                <h3
                  id="project-modal-title"
                  className="font-display text-2xl font-bold text-zinc-50 mt-1"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Details
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-950/70 border-t border-white/[0.08] flex items-center justify-end gap-2.5 shrink-0">
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
