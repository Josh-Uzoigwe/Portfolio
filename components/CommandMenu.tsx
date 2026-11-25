import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ArrowUpRight,
  FileText,
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  X,
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface ActionItem {
  id: string;
  group: 'Quick Actions' | 'Selected Projects' | 'Navigate';
  label: string;
  hint: string;
  icon?: React.ReactNode;
  onSelect: () => void;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ open, onClose, onOpen }) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (open) onClose();
        else onOpen();
      } else if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, onOpen]);

  useEffect(() => {
    if (open) {
      setQuery('');
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 20);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const jumpTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const actions: ActionItem[] = [
    {
      id: 'cv-pdf',
      group: 'Quick Actions',
      label: 'Download Resume (PDF)',
      hint: '1-page ATS CV',
      icon: <FileText className="w-4 h-4 text-zinc-400" />,
      onSelect: () => openExternal(PERSONAL_INFO.cvPdfUrl),
    },
    {
      id: 'copy-email',
      group: 'Quick Actions',
      label: copied ? 'Copied email to clipboard' : `Copy Email (${PERSONAL_INFO.email})`,
      hint: 'Clipboard',
      icon: copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-zinc-400" />
      ),
      onSelect: async () => {
        try {
          await navigator.clipboard.writeText(PERSONAL_INFO.email);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            onClose();
          }, 700);
        } catch {
          window.location.href = `mailto:${PERSONAL_INFO.email}`;
        }
      },
    },
    {
      id: 'send-email',
      group: 'Quick Actions',
      label: 'Compose Email',
      hint: 'mailto',
      icon: <Mail className="w-4 h-4 text-zinc-400" />,
      onSelect: () => {
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
        onClose();
      },
    },
    {
      id: 'github',
      group: 'Quick Actions',
      label: 'Open GitHub Profile',
      hint: 'Josh-Uzoigwe',
      icon: <Github className="w-4 h-4 text-zinc-400" />,
      onSelect: () => openExternal(PERSONAL_INFO.github),
    },
    {
      id: 'linkedin',
      group: 'Quick Actions',
      label: 'Open LinkedIn Profile',
      hint: 'joshua-uzoigwe',
      icon: <Linkedin className="w-4 h-4 text-zinc-400" />,
      onSelect: () => openExternal(PERSONAL_INFO.linkedin),
    },
    ...PROJECTS.map((p): ActionItem => ({
      id: `proj-${p.id}`,
      group: 'Selected Projects',
      label: p.title,
      hint: p.liveUrl ? 'Open Live Demo' : 'Open GitHub Repo',
      icon: <ArrowUpRight className="w-4 h-4 text-zinc-400" />,
      onSelect: () => openExternal(p.liveUrl || p.repoUrl),
    })),
    {
      id: 'nav-work',
      group: 'Navigate',
      label: 'Go to Selected Work',
      hint: '#projects',
      onSelect: () => jumpTo('#projects'),
    },
    {
      id: 'nav-exp',
      group: 'Navigate',
      label: 'Go to Experience & Credentials',
      hint: '#experience',
      onSelect: () => jumpTo('#experience'),
    },
    {
      id: 'nav-stack',
      group: 'Navigate',
      label: 'Go to Technical Stack',
      hint: '#skills',
      onSelect: () => jumpTo('#skills'),
    },
    {
      id: 'nav-contact',
      group: 'Navigate',
      label: 'Go to Contact',
      hint: '#contact',
      onSelect: () => jumpTo('#contact'),
    },
  ];

  const q = query.trim().toLowerCase();
  const filtered = q
    ? actions.filter(
        (a) =>
          a.label.toLowerCase().includes(q) ||
          a.hint.toLowerCase().includes(q) ||
          a.group.toLowerCase().includes(q)
      )
    : actions;

  const groups: Array<ActionItem['group']> = [
    'Quick Actions',
    'Selected Projects',
    'Navigate',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation palette"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-[#111114] border border-white/12 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-white/[0.08] flex items-center gap-3">
          <Search className="w-4 h-4 text-zinc-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to project, copy email, download CV..."
            className="flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-zinc-200 cursor-pointer"
            aria-label="Close palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[360px] overflow-y-auto p-2 space-y-3">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-xs font-mono text-zinc-500">
              No matching commands found.
            </p>
          ) : (
            groups.map((group) => {
              const items = filtered.filter((i) => i.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <p className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {group}
                  </p>
                  <div className="space-y-0.5">
                    {items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.onSelect}
                        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-zinc-200 hover:bg-white/[0.06] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          {item.icon}
                          <span className="truncate">{item.label}</span>
                        </span>
                        <span className="font-mono text-[11px] text-zinc-500 shrink-0">
                          {item.hint}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-zinc-950/70 border-t border-white/[0.07] flex items-center justify-between font-mono text-[10px] text-zinc-500">
          <span>Press ESC to close</span>
          <span>⌘K / Ctrl+K anywhere</span>
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;
