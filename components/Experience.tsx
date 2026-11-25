import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCE, CREDENTIALS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-20 sm:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="space-y-2.5 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
            Where I’ve worked
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Work & Leadership Timeline */}
          <div className="lg:col-span-7 space-y-5">
            {EXPERIENCE.map((item) => (
              <div
                key={`${item.organization}-${item.role}`}
                className="surface-card rounded-2xl p-6 space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-display font-bold text-lg text-zinc-100 leading-snug">
                        {item.role}
                      </h3>
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 transition-colors"
                        >
                          <span>Live Product</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {item.organization} · <span className="text-zinc-500">{item.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">{item.summary}</p>

                <ul className="space-y-2 text-sm text-zinc-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-zinc-500 shrink-0 mt-2.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Hackathons, Certifications & Education */}
          <div className="lg:col-span-5 space-y-5">
            <div className="surface-card rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                <h3 className="font-display font-semibold text-base text-zinc-100">
                  Hackathons &amp; Education
                </h3>
              </div>

              <div className="space-y-4">
                {CREDENTIALS.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-zinc-400">
                        {cred.issuer}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.09] text-zinc-200">
                        {cred.badge}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-sm text-zinc-100">
                      {cred.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{cred.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
