import React from 'react';
import { Project } from '../types';

interface Props {
  type: Project['visualType'];
}

const ProjectVisual: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'sats':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-[#0C0F14] overflow-hidden border-b border-white/[0.07] p-5 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.16),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.14),transparent_55%)]" />
          {/* Web Portal Window */}
          <div className="relative w-[78%] h-[82%] rounded-xl bg-zinc-950/90 border border-white/10 shadow-2xl p-3 flex flex-col gap-2.5 -translate-x-5">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[9px] text-zinc-500">sats.portal / logbook</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2">
                <div className="font-mono text-[8px] text-emerald-300">APPROVED</div>
                <div className="font-display font-bold text-sm text-zinc-100 mt-0.5">24 Wks</div>
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2">
                <div className="font-mono text-[8px] text-zinc-400">ENTRIES</div>
                <div className="font-display font-bold text-sm text-zinc-100 mt-0.5">118</div>
              </div>
              <div className="rounded-lg bg-sky-500/10 border border-sky-500/20 p-2">
                <div className="font-mono text-[8px] text-sky-300">EXPORT</div>
                <div className="font-mono text-[10px] font-semibold text-zinc-100 mt-1">PDF · CSV</div>
              </div>
            </div>
            <div className="space-y-1.5 mt-auto">
              <div className="h-2 w-4/5 rounded bg-white/10" />
              <div className="h-2 w-3/5 rounded bg-white/[0.06]" />
            </div>
          </div>
          {/* Mobile Expo Companion Frame */}
          <div className="absolute right-6 bottom-3 w-24 h-36 rounded-2xl bg-zinc-900 border-2 border-zinc-700/80 shadow-2xl p-2 flex flex-col justify-between">
            <div className="w-8 h-1 rounded-full bg-zinc-700 mx-auto" />
            <div className="space-y-1.5">
              <div className="text-[7px] font-mono text-sky-400">EXPO · RN</div>
              <div className="h-10 rounded-lg bg-gradient-to-br from-emerald-500/25 to-sky-500/20 border border-white/10 flex items-center justify-center font-mono text-[8px] text-zinc-200">
                + Log Entry
              </div>
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-2/3 rounded bg-white/10" />
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[7px] text-zinc-400">SYNCED</span>
            </div>
          </div>
        </div>
      );

    case 'northstone':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-[#0B0E13] overflow-hidden border-b border-white/[0.07] p-5 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.18),transparent_55%)]" />
          <div className="relative flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">NORTHSTONE · PORTFOLIO</div>
              <div className="font-display font-bold text-xl text-zinc-100 mt-0.5">$48,920.40</div>
            </div>
            <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              +14.8% · 2FA ON
            </span>
          </div>
          {/* SVG Candlestick + Area Chart */}
          <svg
            viewBox="0 0 360 110"
            className="relative w-full h-28 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="nsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,92 L45,78 L90,82 L135,58 L180,64 L225,38 L270,42 L315,20 L360,12 L360,110 L0,110 Z"
              fill="url(#nsGrad)"
            />
            <path
              d="M0,92 L45,78 L90,82 L135,58 L180,64 L225,38 L270,42 L315,20 L360,12"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {[
              { x: 45, y: 78 },
              { x: 135, y: 58 },
              { x: 225, y: 38 },
              { x: 315, y: 20 },
            ].map((pt) => (
              <circle
                key={pt.x}
                cx={pt.x}
                cy={pt.y}
                r="3.5"
                fill="#09090B"
                stroke="#34D399"
                strokeWidth="2"
              />
            ))}
          </svg>
          <div className="relative flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>PRISMA · ZOD · OTPLIB</span>
            <span>VITEST + PLAYWRIGHT E2E</span>
          </div>
        </div>
      );

    case 'leoned':
      return (
        <div className="relative w-full h-44 bg-[#0B0F17] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(16,185,129,0.12),transparent_55%)]" />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] text-sky-300">LEONED AFRICA · EDTECH ADMIN</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/25">
              NEXT.JS 16 · TS
            </span>
          </div>
          <div className="relative grid grid-cols-12 gap-2.5 my-1.5">
            {/* Mini Sidebar */}
            <div className="col-span-3 rounded-lg bg-zinc-950/85 border border-white/[0.08] p-2 space-y-1.5">
              {['Students', 'Classes', 'Faculty', 'Rollover'].map((nav, i) => (
                <div
                  key={nav}
                  className={`font-mono text-[8px] px-1.5 py-0.5 rounded ${
                    i === 0 ? 'bg-sky-500/20 text-sky-200' : 'text-zinc-500'
                  }`}
                >
                  {nav}
                </div>
              ))}
            </div>
            {/* Enrollment Wizard + KPI */}
            <div className="col-span-9 rounded-lg bg-zinc-950/85 border border-white/[0.08] p-2.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-400">STUDENT ENROLLMENT WIZARD</span>
                <span className="font-mono text-[8px] text-emerald-400">STEP 3 / 4</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 my-1.5">
                {['Basic Info', 'Guardian', 'Placement', 'Enrolled'].map((step, i) => (
                  <div
                    key={step}
                    className={`rounded px-1.5 py-1 text-center font-mono text-[7px] border ${
                      i < 3
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
                        : 'bg-white/[0.03] border-white/[0.07] text-zinc-500'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded bg-sky-400/40" />
                <div className="h-1.5 w-12 rounded bg-white/10" />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>DESIGN SYSTEM · DATATABLE · FORMS</span>
            <span>MULTI-LAYER PLATFORM</span>
          </div>
        </div>
      );

    case 'elohimtech':
      return (
        <div className="relative w-full h-44 bg-[#0D0E12] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_60%)]" />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] text-sky-300">ELOHIMTECH STORE</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
              IN STOCK · LIVE
            </span>
          </div>
          <div className="relative grid grid-cols-3 gap-2.5 my-2">
            {['#ET-402', '#ET-118', '#ET-905'].map((sku, idx) => (
              <div
                key={sku}
                className="rounded-lg bg-zinc-950/80 border border-white/[0.08] p-2.5 flex flex-col justify-between h-20"
              >
                <span className="font-mono text-[8px] text-zinc-500">{sku}</span>
                <div className="space-y-1">
                  <div className="h-2 w-4/5 rounded bg-white/15" />
                  <div
                    className={`h-1.5 w-1/2 rounded ${
                      idx === 1 ? 'bg-sky-400/50' : 'bg-emerald-400/50'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>NEXT.JS + EXPRESS + MONGODB</span>
            <span>WHATSAPP ORDERING</span>
          </div>
        </div>
      );

    case 'escrow':
      return (
        <div className="relative w-full h-44 bg-[#0E0C14] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.18),transparent_60%)]" />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] text-violet-300">ESCROW.SOL · MILESTONES</span>
            <span className="font-mono text-[9px] text-zinc-400">LOCKED ON-CHAIN</span>
          </div>
          <div className="relative flex items-center justify-between gap-2 my-2">
            {[
              { label: 'Client Vault', state: 'Funded', active: true },
              { label: 'Smart Contract', state: 'Escrowed', active: true },
              { label: 'Freelancer', state: 'Released', active: false },
            ].map((node, i) => (
              <React.Fragment key={node.label}>
                <div className="flex-1 rounded-lg bg-zinc-950/85 border border-white/10 p-2.5 text-center">
                  <div className="text-[10px] font-medium text-zinc-200">{node.label}</div>
                  <div
                    className={`font-mono text-[8px] mt-1 ${
                      node.active ? 'text-violet-300' : 'text-emerald-300'
                    }`}
                  >
                    {node.state}
                  </div>
                </div>
                {i < 2 && <div className="w-4 h-px bg-violet-400/50 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
          <div className="relative flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>SOLIDITY · ARBITRATION</span>
            <span>ROLE-BASED DAPP</span>
          </div>
        </div>
      );

    case 'celopulse':
      return (
        <div className="relative w-full h-44 bg-[#0B120F] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,208,127,0.18),transparent_65%)]" />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] text-emerald-300">CELOPULSE · MARKET #14</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25">
              TOP 50 CELO
            </span>
          </div>
          <div className="relative space-y-2.5 my-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="text-emerald-300">YES · 68%</span>
              <span className="text-rose-300">NO · 32%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-zinc-900 overflow-hidden flex border border-white/10">
              <div className="w-[68%] bg-gradient-to-r from-emerald-500 to-teal-400" />
              <div className="w-[32%] bg-rose-500/50" />
            </div>
            <div className="flex justify-between font-mono text-[9px] text-zinc-400">
              <span>Pool: 4,280 cUSD</span>
              <span>Trustless Settlement</span>
            </div>
          </div>
          <div className="relative flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>SOLIDITY · ETHERS.JS</span>
            <span>CELO BLOCKCHAIN</span>
          </div>
        </div>
      );

    case 'codementor':
      return (
        <div className="relative w-full h-44 bg-[#0B0C10] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between font-mono">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(245,158,11,0.14),transparent_60%)]" />
          <div className="relative flex items-center justify-between">
            <span className="text-[10px] text-amber-300">CODEMENTOR · LOCAL OLLAMA</span>
            <span className="text-[9px] text-emerald-400">100% OFFLINE</span>
          </div>
          <div className="relative rounded-lg bg-zinc-950/90 border border-white/[0.08] p-2.5 text-[10px] space-y-1 text-zinc-300">
            <div className="text-zinc-500">$ ollama run gemma4 --analyze project.zip</div>
            <div className="text-emerald-400">✓ Scanned 42 files · 0 data sent externally</div>
            <div className="text-amber-300">→ Diagnosed race condition in auth/session.ts</div>
          </div>
          <div className="relative flex items-center justify-between text-[9px] text-zinc-500">
            <span>PYTHON · STREAMLIT</span>
            <span>ZIP · SNIPPET · SCREENSHOT</span>
          </div>
        </div>
      );
  }
};

export default ProjectVisual;
