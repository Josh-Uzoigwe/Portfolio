import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="surface-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Contact
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
                Get in touch
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                I’m open to full-time software engineering roles (full-stack, frontend, backend, or
                mobile) as well as freelance projects. Email is the fastest way to reach me.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 text-zinc-200 border border-white/10 hover:border-white/20 text-sm font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/70 border border-white/[0.07] hover:border-white/15 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                  <div>
                    <div className="text-sm font-medium text-zinc-100">GitHub</div>
                    <div className="text-xs font-mono text-zinc-500">github.com/Josh-Uzoigwe</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/70 border border-white/[0.07] hover:border-white/15 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                  <div>
                    <div className="text-sm font-medium text-zinc-100">LinkedIn</div>
                    <div className="text-xs font-mono text-zinc-500">joshua-uzoigwe</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200" />
              </a>

              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/70 border border-white/[0.07] hover:border-white/15 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-sm font-medium text-zinc-100">Curriculum Vitae</div>
                    <div className="text-xs font-mono text-zinc-500">Download job-ready PDF</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200" />
              </a>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-zinc-400">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
