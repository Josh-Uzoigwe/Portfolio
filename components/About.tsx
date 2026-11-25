import React from 'react';
import { PERSONAL_INFO } from '../constants';

const CURRENT_FOCUS = [
  {
    index: '01',
    title: 'Full-stack web work',
    description:
      'Building Next.js frontends and Node/Express APIs that stay straightforward to maintain as features grow.',
  },
  {
    index: '02',
    title: 'Getting deeper into mobile',
    description:
      'Shipping cross-platform apps in React Native and Expo alongside existing web backends.',
  },
  {
    index: '03',
    title: 'Smart contracts & testing',
    description:
      'Writing Solidity contracts on Base and Celo, and spending more time on automated testing (Vitest, Jest, Playwright).',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              About
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              A bit about me
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              What I’m focused on lately
            </p>
            {CURRENT_FOCUS.map((item) => (
              <div
                key={item.title}
                className="surface-card rounded-2xl p-5 flex items-start gap-4"
              >
                <span className="font-mono text-xs text-zinc-500 pt-0.5 select-none">
                  {item.index}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-sm text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
