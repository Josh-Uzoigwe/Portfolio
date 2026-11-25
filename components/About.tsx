import React from 'react';
import { PERSONAL_INFO } from '../constants';

const PRINCIPLES = [
  {
    index: '01',
    title: 'End-to-End Ownership',
    description:
      'I work comfortably across UI architecture, backend APIs, database schemas, and deployment pipelines — reducing handoff friction.',
  },
  {
    index: '02',
    title: 'Security & Testing First',
    description:
      'From 2FA/OAuth flows and Zod validation to Vitest, Playwright E2E, and Solidity escrow logic, I build software meant to hold up in production.',
  },
  {
    index: '03',
    title: 'Pragmatic Cross-Platform Growth',
    description:
      'Grounded in full-stack web engineering, actively shipping React Native / Expo mobile apps, and exploring decentralized systems on the side.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              About Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Software engineer first — with mobile and Web3 depth.
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {PRINCIPLES.map((item) => (
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
