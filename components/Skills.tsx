import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="space-y-2.5 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
            What I work with
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Languages, frameworks, and tools I use day to day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((category) => (
            <div
              key={category.title}
              className="surface-card surface-card-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h3 className="font-display font-semibold text-base text-zinc-100">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{category.subtitle}</p>
                </div>
                <span className="font-mono text-xs text-zinc-600 select-none">
                  {category.index}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
