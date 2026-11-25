import {
  Project,
  SkillCategory,
  ExperienceItem,
  CredentialItem,
} from './types';

export const PERSONAL_INFO = {
  name: 'Uzoigwe Joshua',
  shortName: 'Joshua Uzoigwe',
  role: 'Software Engineer',
  headline: 'Full-Stack Software Engineer building web, mobile, and Web3 products.',
  tagline:
    'I engineer reliable full-stack applications with TypeScript, Next.js, and Node.js — expanding into cross-platform mobile apps with React Native & Expo, and shipping Solidity smart contracts on the side.',
  aboutParagraphs: [
    'I am a Computer Science graduate (University of Nigeria, Nsukka) and full-time Software Engineer focused on building clean, maintainable, end-to-end products. Across my work at Elohimtech and Leoned Africa, I have architected responsive Next.js frontends, RESTful backend services, authentication flows, and scalable database schemas.',
    'Recently, I have expanded into cross-platform mobile development using React Native and Expo — building companion mobile apps with secure storage, media uploads, and real-time API synchronization alongside web platforms.',
    'Outside full-time web and mobile engineering, I build decentralized applications and smart contracts on EVM chains (Celo and Base), and mentor student developers at Borderless Tech Club UNN. I finished 2nd place in Base Builder Quest #10 and placed Top 50 in the Celo Hackathon.',
  ],
  location: 'Nsukka, Nigeria · Open to Remote & Relocation',
  email: 'uzoigwejoshua2@gmail.com',
  phone: '+234 704 224 4727',
  github: 'https://github.com/Josh-Uzoigwe',
  linkedin: 'https://www.linkedin.com/in/joshua-uzoigwe-4b5411239',
  cvPdfUrl: '/Uzoigwe-Joshua-CV.pdf',
  cvHtmlUrl: '/cv.html',
};

export const PROJECTS: Project[] = [
  {
    id: 'sats',
    title: 'SIWES Activity Tracking System',
    subtitle: 'Web Portal + React Native Mobile App + REST API',
    year: '2026',
    category: 'Full-Stack',
    secondaryCategories: ['Mobile'],
    featured: true,
    visualType: 'sats',
    description:
      'A multi-platform industrial training logbook and supervision platform built for students, industry supervisors, and coordinators — unifying a React web portal, an Expo React Native mobile app, and a containerized Express + Prisma + MySQL API.',
    tags: [
      'React',
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'Prisma',
      'MySQL',
      'Docker',
    ],
    liveUrl: 'https://sats-sooty.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/SIWES-Activity-Tracking-System',
    highlights: [
      'Built a cross-platform React Native (Expo) mobile app with Expo SecureStore auth, image-picker evidence uploads, and native stack navigation.',
      'Engineered an Express + Prisma + MySQL backend with Google OAuth, JWT cookies, Helmet/rate limiting, and automated PDF & CSV logbook generation.',
      'Added Jest + Supertest API test suites and Docker Compose / Render blueprints for reproducible deployment.',
    ],
  },
  {
    id: 'northstone',
    title: 'Northstone Investment Platform',
    subtitle: 'FinTech Portfolio & Trading Simulation App',
    year: '2026',
    category: 'Full-Stack',
    featured: true,
    visualType: 'northstone',
    description:
      'A modern full-stack investment and market analytics platform featuring interactive financial charts, TOTP two-factor authentication, schema-validated APIs, and automated unit + E2E test coverage.',
    tags: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'Tailwind CSS',
      'Lightweight Charts',
      'Zod',
      'Playwright',
      'Vitest',
    ],
    liveUrl: 'https://ivstdmo.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Ivstdmo',
    highlights: [
      'Integrated TradingView Lightweight Charts and Recharts for responsive candlestick and portfolio performance visualizations.',
      'Implemented TOTP two-factor authentication (otplib + QR code provisioning), bcrypt password hashing, and Zod request validation.',
      'Verified critical user flows with Vitest unit tests and Playwright end-to-end test suites.',
    ],
  },
  {
    id: 'leoned',
    title: 'Leoned Africa — School Management Platform',
    subtitle: 'Multi-Layer EdTech Admin Dashboard & Enrollment System',
    year: '2026',
    category: 'Frontend',
    visualType: 'leoned',
    description:
      'Production frontend architecture built for Leoned Africa’s multi-layer educational platform — featuring a 4-step student enrollment wizard, faculty & class management, academic year rollover workflows, and a custom reusable UI design system.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Design System'],
    liveUrl: 'https://frontend1-ashen.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Frontend1',
    highlights: [
      'Engineered a 4-step Student Enrollment Wizard (Basic Info, Guardian Info, Academic Placement, Confirmation) with structured state and validation.',
      'Built core academic administration modules for Students, Classes, Faculty, and Academic Rollover backed by reusable DataTable and StatCard components.',
      'Architected a custom accessible form component library (DatePicker, Select, Input, Toggle) and responsive DashboardLayout for desktop and mobile viewports.',
    ],
  },
  {
    id: 'elohimtech',
    title: 'ElohimTech Gadgets E-Commerce',
    subtitle: 'Full-Stack Storefront & Inventory Backend',
    year: '2026',
    category: 'Full-Stack',
    visualType: 'elohimtech',
    description:
      'Production e-commerce platform engineered for Elohimtech Gadgets, featuring real-time stock availability tracking, unique product tagging, admin inventory management, and streamlined WhatsApp order checkout.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    liveUrl: 'https://elohim-tech1.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/ElohimTech1',
    highlights: [
      'Architected a Next.js storefront paired with a dedicated Express + MongoDB REST API for catalogue, inventory, and order workflows.',
      'Built real-time availability indicators, unique product identifiers, and direct WhatsApp ordering tailored for high-conversion mobile shoppers.',
      'Structured modular Mongoose schemas and reusable UI components for maintainable scaling.',
    ],
  },
  {
    id: 'escrow',
    title: 'Decentralized Freelance Escrow',
    subtitle: 'Smart Contract Milestone & Arbitration DApp',
    year: '2026',
    category: 'Blockchain',
    secondaryCategories: ['Full-Stack'],
    visualType: 'escrow',
    description:
      'A blockchain-enabled freelance marketplace protecting clients and freelancers via Solidity smart contract escrow, milestone-based payouts, decentralized arbitrator dispute resolution, and built-in messaging.',
    tags: ['Solidity', 'Smart Contracts', 'JavaScript', 'Node.js', 'Web3', 'Escrow'],
    liveUrl: 'https://it-project-dusky.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/IT-project',
    highlights: [
      'Wrote Solidity escrow contracts enforcing secure fund locking, approval-gated milestone releases, and arbitrator-backed dispute resolution.',
      'Supported distinct Client, Freelancer, and Arbitrator role workflows with transparent ratings and messaging.',
      'Bridged Web2 backend services with on-chain contract state in a cohesive full-stack deployment.',
    ],
  },
  {
    id: 'celopulse',
    title: 'CeloPulse Prediction Market',
    subtitle: 'On-Chain Prediction & Settlement DApp · Top 50 Celo Hackathon',
    year: '2025',
    category: 'Blockchain',
    visualType: 'celopulse',
    description:
      'A decentralized prediction market deployed on the Celo blockchain allowing users to create markets, take positions, and settle outcomes trustlessly through Solidity smart contracts and a live React analytics UI.',
    tags: ['Solidity', 'Celo', 'Ethers.js', 'React', 'TypeScript', 'Recharts'],
    liveUrl: 'https://celo-pulse.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Celo-Hackathon-2',
    highlights: [
      'Placed Top 50 in the Celo Hackathon with end-to-end Solidity smart contracts for market creation, staking, and trustless settlement.',
      'Integrated Ethers.js wallet connectivity and real-time market probability visualizations with Recharts.',
      'Optimized contract storage and gas usage while prioritizing transparent on-chain resolution.',
    ],
  },
  {
    id: 'codementor',
    title: 'CodeMentor — Local AI Copilot',
    subtitle: 'Offline Codebase Analyzer & Visual Error Debugger',
    year: '2026',
    category: 'AI & Tools',
    visualType: 'codementor',
    description:
      'A privacy-first, fully offline debugging assistant powered by local Ollama models. Supports full ZIP repository audits, code snippet reviews, and multimodal error screenshot diagnosis with real-time token streaming.',
    tags: ['Python', 'Streamlit', 'Ollama', 'Multimodal LLM', 'Developer Tools'],
    repoUrl: 'https://github.com/Josh-Uzoigwe/Code-Mentor',
    highlights: [
      'Built three analysis modes: full ZIP codebase scanning, snippet/log debugging, and PNG/JPG error screenshot diagnosis.',
      'Implemented real-time token streaming against local Ollama models so proprietary code never leaves the developer machine.',
      'Designed clean multi-tab developer UX for rapid triage of Python, React, JavaScript, and Solidity errors.',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full-Stack Engineer',
    organization: 'Elohimtech',
    location: 'Remote',
    period: 'Oct 2024 – Present',
    type: 'Work',
    summary:
      'Owned end-to-end architecture and delivery of the company’s full-stack e-commerce platform and internal admin tooling.',
    bullets: [
      'Architected and shipped a full-featured gadget e-commerce platform spanning a Next.js storefront and an Express + MongoDB backend.',
      'Engineered secure authentication, product catalogue management, real-time availability tracking, order processing, and WhatsApp/payment checkout flows.',
      'Built admin dashboards for inventory tracking, sales analytics, and customer order management.',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Frontend Engineer',
    organization: 'Leoned Africa',
    location: 'Remote',
    period: '2024 – Present',
    type: 'Work',
    summary:
      'Led frontend architecture and accessible UI development for a multi-layer educational web platform.',
    bullets: [
      'Designed and built reusable component libraries and design systems using Next.js and TypeScript for consistent scaling across platform modules.',
      'Partnered with product and backend teams to integrate REST APIs and optimize client-side data fetching for faster page loads.',
      'Implemented responsive, WCAG-compliant UI components tailored for learners across desktop and mobile devices in varied connectivity environments.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Community Manager & Blockchain Developer',
    organization: 'Borderless Tech Club — UNN',
    location: 'Nsukka, Nigeria',
    period: 'Mar 2026 – Present',
    type: 'Leadership',
    summary:
      'Growing the university Web3 developer community and leading hands-on Solidity and DApp workshops.',
    bullets: [
      'Lead the blockchain development curriculum, mentoring student cohorts in Solidity, smart contract security, and DApp architecture.',
      'Organize technical workshops, hackathons, speaker sessions, and collaborative build sprints.',
    ],
    stack: ['Solidity', 'Web3', 'Mentorship', 'Community'],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    title: 'Base Builder Quest #10 — 2nd Place',
    issuer: 'Base (Coinbase L2)',
    detail:
      'Awarded 2nd place and earned the Base Builders Certification for shipping production-grade applications on the Base ecosystem.',
    badge: '2nd Place',
  },
  {
    title: 'Celo Hackathon — Top 50 Finalist',
    issuer: 'Celo Ecosystem',
    detail:
      'Built and deployed CeloPulse, a decentralized prediction market with Solidity smart contracts and live on-chain trading UI.',
    badge: 'Top 50',
  },
  {
    title: 'B.Sc. Computer Science',
    issuer: 'University of Nigeria, Nsukka',
    detail:
      'Jan 2022 – Oct 2026 · Final-year capstone: multi-platform SIWES Activity Tracking System (Web, React Native Mobile, Express/MySQL API).',
    badge: '2022 – 2026',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    index: '01',
    title: 'Frontend Engineering',
    subtitle: 'Interfaces & Design Systems',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js',
      'Tailwind CSS',
      'WCAG Accessibility',
    ],
  },
  {
    index: '02',
    title: 'Backend & Databases',
    subtitle: 'APIs, Auth & Data Modeling',
    skills: [
      'Node.js',
      'Express.js',
      'Prisma ORM',
      'MongoDB & Mongoose',
      'MySQL',
      'REST APIs & OAuth / JWT',
    ],
  },
  {
    index: '03',
    title: 'Mobile Development',
    subtitle: 'Cross-Platform iOS & Android',
    skills: [
      'React Native',
      'Expo',
      'React Navigation',
      'Expo SecureStore',
      'Native Media & Permissions',
      'Mobile-First UX',
    ],
  },
  {
    index: '04',
    title: 'Blockchain & Web3',
    subtitle: 'Smart Contracts & EVM DApps',
    skills: [
      'Solidity',
      'Ethers.js',
      'Smart Contract Escrow',
      'Base (L2)',
      'Celo Ecosystem',
      'DApp Architecture',
    ],
  },
  {
    index: '05',
    title: 'Testing & DevOps',
    subtitle: 'Quality & Delivery',
    skills: [
      'Git & GitHub',
      'Docker & Compose',
      'Vitest & Jest',
      'Playwright E2E',
      'CI/CD Workflows',
      'Vercel & Render',
    ],
  },
  {
    index: '06',
    title: 'AI & Developer Tools',
    subtitle: 'Local LLMs & Automation',
    skills: [
      'Python',
      'Streamlit',
      'Ollama (Local LLMs)',
      'Gemini API',
      'Zod Validation',
      'Agile Collaboration',
    ],
  },
];
