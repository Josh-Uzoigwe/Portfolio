import React from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            <p className="font-mono text-xs text-zinc-400">
              {PERSONAL_INFO.location}
            </p>

            <div className="space-y-5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.3rem] font-bold tracking-tight text-zinc-50 leading-[1.1]">
                Software engineer working across{' '}
                <span className="text-zinc-400">web, mobile, and smart contracts.</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-colors"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-zinc-100 border border-white/10 hover:border-white/20 hover:bg-zinc-800/80 font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-zinc-300" />
                <span>Download CV</span>
              </a>
              <a
                href={PERSONAL_INFO.cvHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span>Web CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <p className="font-display font-semibold text-sm text-zinc-100">
                  Current &amp; Recent
                </p>
                <span className="font-mono text-[11px] text-zinc-500">
                  2024 — 2026
                </span>
              </div>

              <div className="divide-y divide-white/[0.06] text-sm">
                <div className="py-3 first:pt-0 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-zinc-100">Full-Stack Engineer</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Elohimtech · E-commerce</p>
                  </div>
                  <a
                    href="https://elohim-tech1.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-400 hover:text-zinc-100 shrink-0 mt-0.5 transition-colors"
                  >
                    <span>Site</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-zinc-100">Frontend Engineer</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Leoned Africa · School platform</p>
                  </div>
                  <a
                    href="https://frontend1-ashen.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-400 hover:text-zinc-100 shrink-0 mt-0.5 transition-colors"
                  >
                    <span>Site</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-zinc-100">Community &amp; Solidity Lead</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Borderless Tech Club, UNN</p>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 shrink-0 mt-0.5">
                    Campus
                  </span>
                </div>

                <div className="py-3 last:pb-0 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-zinc-100">B.Sc. Computer Science</p>
                    <p className="text-xs text-zinc-400 mt-0.5">University of Nigeria, Nsukka</p>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 shrink-0 mt-0.5">
                    2026
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.07]">
                <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/[0.06]">
                  <p className="font-mono text-[11px] text-emerald-400">2nd Place</p>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Base Builder Quest #10
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/[0.06]">
                  <p className="font-mono text-[11px] text-zinc-300">Top 50</p>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Celo Hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
