import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen selection:bg-web3-500/30">
      <NavBar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Uzoigwe Joshua. Built with React, Tailwind & Gemini API.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
