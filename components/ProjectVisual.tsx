import React from 'react';
import { Project } from '../types';

interface Props {
  type: Project['visualType'];
  spotlight?: boolean;
}

const ProjectVisual: React.FC<Props> = ({ type, spotlight = false }) => {
  switch (type) {
    case 'sats':
      return (
        <div
          className={`relative w-full ${
            spotlight ? 'h-60 md:h-full min-h-[250px] md:border-b-0 md:border-r' : 'h-48 border-b'
          } bg-[#0C0E12] overflow-hidden border-white/[0.07] p-5 flex items-center justify-center`}
        >
          <div className="absolute inset-0 bg-grid-subtle opacity-60" />
          {/* Web Portal Frame */}
          <div className="relative w-[78%] rounded-xl bg-zinc-950 border border-white/10 shadow-2xl p-3.5 flex flex-col gap-3 -translate-x-4">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-2">
              <span className="font-mono text-[9px] text-zinc-400">client / vite + react</span>
              <span className="font-mono text-[9px] text-emerald-400">server / express + prisma</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.07] p-2">
                <div className="font-mono text-[8px] text-zinc-500">AUTH</div>
                <div className="font-mono text-[10px] text-zinc-200 mt-0.5">OAuth + JWT</div>
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.07] p-2">
                <div className="font-mono text-[8px] text-zinc-500">DATA</div>
                <div className="font-mono text-[10px] text-zinc-200 mt-0.5">MySQL ORM</div>
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.07] p-2">
                <div className="font-mono text-[8px] text-zinc-500">REPORTS</div>
                <div className="font-mono text-[10px] text-zinc-200 mt-0.5">PDF · CSV</div>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[8px] text-zinc-500 pt-1">
              <span>docker-compose.yml</span>
              <span>jest + supertest</span>
            </div>
          </div>
          {/* Mobile Expo Companion Frame */}
          <div className="absolute right-5 bottom-4 w-24 h-36 rounded-2xl bg-zinc-900 border border-white/15 shadow-2xl p-2.5 flex flex-col justify-between">
            <div className="w-7 h-1 rounded-full bg-zinc-700 mx-auto" />
            <div className="space-y-1.5">
              <div className="text-[7px] font-mono text-sky-400">mobile / expo 57</div>
              <div className="rounded-md bg-zinc-950 border border-white/10 px-1.5 py-1.5 font-mono text-[7.5px] text-zinc-300">
                SecureStore
              </div>
              <div className="rounded-md bg-zinc-950 border border-white/10 px-1.5 py-1.5 font-mono text-[7.5px] text-zinc-300">
                ImagePicker
              </div>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[7px] text-zinc-400">RN 0.86</span>
            </div>
          </div>
        </div>
      );

    case 'northstone':
      return (
        <div className="relative w-full h-44 bg-[#0B0D11] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-300">NORTHSTONE · MARKET ANALYTICS</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300">
              TOTP 2FA · ZOD
            </span>
          </div>
          <svg
            viewBox="0 0 360 96"
            className="w-full h-24 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="nsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 L45,68 L90,72 L135,50 L180,56 L225,34 L270,38 L315,18 L360,12 L360,96 L0,96 Z"
              fill="url(#nsGrad)"
            />
            <path
              d="M0,80 L45,68 L90,72 L135,50 L180,56 L225,34 L270,38 L315,18 L360,12"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>LIGHTWEIGHT-CHARTS · PRISMA</span>
            <span>VITEST + PLAYWRIGHT E2E</span>
          </div>
        </div>
      );

    case 'leoned':
      return (
        <div className="relative w-full h-44 bg-[#0B0E14] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-300">LEONED AFRICA · EDTECH ADMIN</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300">
              NEXT.JS 16 · TS
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2.5 my-1">
            <div className="col-span-3 rounded-lg bg-zinc-950 border border-white/[0.08] p-2 space-y-1">
              {['Students', 'Classes', 'Faculty', 'Rollover'].map((nav, i) => (
                <div
                  key={nav}
                  className={`font-mono text-[8px] px-1.5 py-0.5 rounded ${
                    i === 0 ? 'bg-white/10 text-zinc-100' : 'text-zinc-500'
                  }`}
                >
                  {nav}
                </div>
              ))}
            </div>
            <div className="col-span-9 rounded-lg bg-zinc-950 border border-white/[0.08] p-2.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-400">ENROLLMENT WIZARD</span>
                <span className="font-mono text-[8px] text-emerald-400">4 STEPS</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 my-1.5">
                {['Basic', 'Guardian', 'Placement', 'Confirm'].map((step, i) => (
                  <div
                    key={step}
                    className={`rounded px-1 py-1 text-center font-mono text-[7px] border ${
                      i < 3
                        ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-200'
                        : 'bg-white/[0.02] border-white/[0.07] text-zinc-500'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="font-mono text-[7.5px] text-zinc-500">
                ui / DataTable · DatePicker · Select · Toggle
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>DESIGN SYSTEM ARCHITECTURE</span>
            <span>WCAG RESPONSIVE UI</span>
          </div>
        </div>
      );

    case 'elohimtech':
      return (
        <div className="relative w-full h-44 bg-[#0C0D11] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-300">ELOHIMTECH · E-COMMERCE</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300">
              STORE + REST API
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 my-1.5">
            {[
              { layer: 'frontend/', detail: 'Next.js Catalogue' },
              { layer: 'backend/', detail: 'Express + Mongoose' },
              { layer: 'checkout/', detail: 'WhatsApp Pipeline' },
            ].map((mod) => (
              <div
                key={mod.layer}
                className="rounded-lg bg-zinc-950 border border-white/[0.08] p-2.5 flex flex-col justify-between h-[4.5rem]"
              >
                <span className="font-mono text-[8px] text-zinc-500">{mod.layer}</span>
                <span className="font-mono text-[9px] text-zinc-200 leading-tight">
                  {mod.detail}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>NEXT.JS + EXPRESS + MONGODB</span>
            <span>LIVE INVENTORY TAGS</span>
          </div>
        </div>
      );

    case 'escrow':
      return (
        <div className="relative w-full h-44 bg-[#0C0B10] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-300">ESCROW.SOL · CONTRACT FLOW</span>
            <span className="font-mono text-[9px] text-zinc-500">ARBITRATION</span>
          </div>
          <div className="flex items-center justify-between gap-2 my-2">
            {[
              { label: 'Client', state: 'Deposit Funds' },
              { label: 'Escrow.sol', state: 'Milestone Lock' },
              { label: 'Freelancer', state: 'Approved Payout' },
            ].map((node, i) => (
              <React.Fragment key={node.label}>
                <div className="flex-1 rounded-lg bg-zinc-950 border border-white/10 p-2.5 text-center">
                  <div className="text-[10px] font-medium text-zinc-200">{node.label}</div>
                  <div className="font-mono text-[8px] text-zinc-400 mt-1">{node.state}</div>
                </div>
                {i < 2 && <div className="w-4 h-px bg-zinc-700 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>SOLIDITY · DISPUTE RESOLUTION</span>
            <span>CLIENT · FREELANCER · ARBITRATOR</span>
          </div>
        </div>
      );

    case 'celopulse':
      return (
        <div className="relative w-full h-44 bg-[#0B0F0D] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-300">CELOPULSE · ON-CHAIN MARKET</span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              TOP 50 CELO
            </span>
          </div>
          <div className="rounded-lg bg-zinc-950 border border-white/[0.08] p-3 space-y-2">
            <div className="flex justify-between font-mono text-[9px] text-zinc-400">
              <span>createMarket()</span>
              <span>takePosition()</span>
              <span>resolveMarket()</span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden flex border border-white/10">
              <div className="w-2/3 bg-emerald-500/70" />
              <div className="w-1/3 bg-zinc-700" />
            </div>
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span>SOLIDITY · ETHERS.JS · RECHARTS</span>
            <span>CELO NETWORK</span>
          </div>
        </div>
      );

    case 'codementor':
      return (
        <div className="relative w-full h-44 bg-[#0B0C0E] overflow-hidden border-b border-white/[0.07] p-4 flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-300">CODEMENTOR · LOCAL OLLAMA</span>
            <span className="text-[9px] text-emerald-400">OFFLINE</span>
          </div>
          <div className="rounded-lg bg-zinc-950 border border-white/[0.08] p-2.5 text-[9.5px] space-y-1 text-zinc-300">
            <div className="text-zinc-500">$ streamlit run app.py # model: gemma4</div>
            <div className="text-zinc-300">→ Modes: [ZIP Audit] [Snippet] [Screenshot]</div>
            <div className="text-emerald-400">✓ Token stream active · zero external calls</div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-zinc-500">
            <span>PYTHON · STREAMLIT · OLLAMA</span>
            <span>MULTIMODAL TRIAGE</span>
          </div>
        </div>
      );
  }
};

export default ProjectVisual;
