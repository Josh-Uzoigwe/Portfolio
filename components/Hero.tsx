import React from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Award,
  Layers,
  Smartphone,
  Blocks,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Subtle architectural grid & ambient glow */}
      <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_65%,transparent_100%)] pointer-events-none" />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[320px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.55) 0%, rgba(14,165,233,0.2) 60%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-7">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Available for Full-Stack &amp; Mobile Engineering roles
            </p>

            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-zinc-50 leading-[1.08]">
                Full-Stack Software Engineer building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                  web, mobile &amp; Web3
                </span>{' '}
                products.
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-colors shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-zinc-100 border border-white/10 hover:border-white/20 hover:bg-zinc-800/80 font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </a>
              <a
                href={PERSONAL_INFO.cvHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span>View Web CV</span>
              </a>
            </div>

            {/* Social / Quick Meta */}
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

          {/* Right Engineering Dossier Card */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    Engineer Profile
                  </p>
                  <p className="font-display font-semibold text-zinc-100 mt-0.5">
                    {PERSONAL_INFO.name}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900/90 border border-white/[0.07] px-2.5 py-1 rounded-md">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Remote · NG
                </span>
              </div>

              {/* Core Focus Tracks */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-100">Full-Stack Web</span>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Next.js, React, TypeScript, Node.js, Prisma, MongoDB &amp; MySQL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-100">Mobile Development</span>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      React Native, Expo, SecureStore &amp; cross-platform companions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                    <Blocks className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-100">Blockchain &amp; Web3</span>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Solidity smart contracts, escrow DApps, Base L2 &amp; Celo
                    </p>
                  </div>
                </div>
              </div>

              {/* Recognition Strip */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.07]">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>2nd Place</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-medium mt-1">
                    Base Builder Quest #10
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>Top 50</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-medium mt-1">
                    Celo Global Hackathon
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
