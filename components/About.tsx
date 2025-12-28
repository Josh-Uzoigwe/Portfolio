import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Bot, Sparkles, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              My journey started with traditional web development, but the potential of decentralized finance (DeFi) and ownership economies led me to Celo and Solidity. I believe in building software that is not just functional, but transformative.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-celo-500/10 rounded-full blur-[60px]" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Bot className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Prompt Engineering & AI Workflow</h3>
            </div>
            
            <p className="text-slate-400 mb-6">
              I leverage AI not just as a tool, but as a force multiplier in my development process.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1"><Terminal className="w-5 h-5 text-slate-500" /></div>
                <div>
                  <h4 className="text-slate-200 font-medium">Scaffolding & Architecture</h4>
                  <p className="text-sm text-slate-500">Rapidly generating boilerplate and evaluating architectural patterns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Sparkles className="w-5 h-5 text-slate-500" /></div>
                <div>
                  <h4 className="text-slate-200 font-medium">Enhanced Debugging</h4>
                  <p className="text-sm text-slate-500">Analyzing complex error traces and edge cases in smart contracts.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
