import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import CommandMenu from './components/CommandMenu';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-100 focus:text-zinc-950 focus:text-xs focus:font-semibold"
      >
        Skip to content
      </a>

      <NavBar onOpenCommand={() => setCommandOpen(true)} />

      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-5 font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              Resume
            </a>
            <a href="#" className="hover:text-zinc-200 transition-colors">
              Top ↑
            </a>
          </div>
        </div>
      </footer>

      <CommandMenu
        open={commandOpen}
        onOpen={() => setCommandOpen(true)}
        onClose={() => setCommandOpen(false)}
      />
    </div>
  );
};

export default App;
