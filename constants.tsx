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
  headline: 'Software engineer working across web, mobile, and smart contracts.',
  tagline:
    "I build full-stack web apps for a living, mostly with TypeScript, Next.js, and Node.js. Lately I've been getting into mobile development with React Native and Expo, and on the side I write Solidity contracts on Base and Celo.",
  aboutParagraphs: [
    'I studied Computer Science at the University of Nigeria, Nsukka, and spend most of my day building web software. Between my roles at Elohimtech and Leoned Africa, my regular work covers React and Next.js on the frontend, Node/Express APIs on the backend, and MongoDB or MySQL underneath.',
    'More recently, I started building mobile apps with React Native and Expo. Since I already write React and TypeScript daily, moving into mobile felt natural — I used Expo to build the companion mobile app for my final-year SIWES logbook project.',
    "Outside of regular web and mobile work, I spend time building on EVM chains and helping run Borderless Tech Club at UNN, where we teach other students Solidity and Web3 basics. Along the way, I placed 2nd in Base Builder Quest #10 and made the top 50 in the Celo Hackathon.",
  ],
  location: 'Lagos, Nigeria · Open to Remote',
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
    subtitle: 'Web portal, Expo mobile app & Express/MySQL API',
    year: '2026',
    category: 'Full-Stack',
    secondaryCategories: ['Mobile'],
    featured: true,
    visualType: 'sats',
    description:
      'My final-year Computer Science project at UNN. Nigerian university students on industrial attachment (SIWES) still fill out paper logbooks by hand, so I built a digital version: an Expo mobile app for logging daily work and photo proof, a web portal for supervisors to review entries, and an Express + MySQL backend.',
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
      'Built the student mobile app with React Native and Expo, using SecureStore for auth tokens and ImagePicker for uploading workplace photos.',
      'Wrote the Express + Prisma + MySQL API with Google OAuth, JWT cookie sessions, rate limiting, and PDF/CSV logbook exports.',
      'Added API tests with Jest and Supertest, plus Docker Compose and Render configs for deployment.',
    ],
  },
  {
    id: 'northstone',
    title: 'Northstone',
    subtitle: 'Investment & portfolio tracking web app',
    year: '2026',
    category: 'Full-Stack',
    visualType: 'northstone',
    description:
      'A demo investment platform I built to get hands-on with financial charting libraries, authenticator-based 2FA, and browser end-to-end testing in Next.js.',
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
      'Wired up TradingView Lightweight Charts and Recharts for price history and portfolio breakdowns.',
      'Implemented TOTP two-factor auth (QR code setup via otplib), bcrypt password hashing, and Zod validation on API inputs.',
      'Wrote unit tests in Vitest and browser E2E tests in Playwright covering sign-in and dashboard flows.',
    ],
  },
  {
    id: 'leoned',
    title: 'Leoned Africa',
    subtitle: 'School administration frontend',
    year: '2026',
    category: 'Frontend',
    visualType: 'leoned',
    description:
      'Frontend for an education management platform I worked on at Leoned Africa. Handles day-to-day school admin — enrolling new students, managing classes and teachers, and rolling student records into a new academic session.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
    liveUrl: 'https://frontend1-ashen.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Frontend1',
    highlights: [
      'Built a 4-step student enrollment form covering basic details, guardian info, class placement, and confirmation.',
      'Created dashboard screens for students, classes, faculty, and academic year rollover.',
      'Built shared tables, date pickers, selects, and toggles from scratch so pages stayed consistent without pulling in a heavy UI kit.',
    ],
  },
  {
    id: 'elohimtech',
    title: 'ElohimTech Gadgets',
    subtitle: 'Gadget storefront & inventory API',
    year: '2026',
    category: 'Full-Stack',
    visualType: 'elohimtech',
    description:
      'Online store and backend built for a gadget retailer. Shoppers check live stock availability and complete orders straight over WhatsApp, which matches how most buyers locally prefer to order.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    liveUrl: 'https://elohim-tech1.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/ElohimTech1',
    highlights: [
      'Built the customer storefront in Next.js and connected it to a separate Express + MongoDB backend.',
      'Added real-time stock status tags, product filtering, and pre-filled WhatsApp order links.',
      'Built admin pages for adding products, updating prices, and managing stock.',
    ],
  },
  {
    id: 'escrow',
    title: 'Freelance Escrow DApp',
    subtitle: 'Smart contract milestone payments & dispute resolution',
    year: '2026',
    category: 'Blockchain',
    secondaryCategories: ['Full-Stack'],
    visualType: 'escrow',
    description:
      'My SIWES defense project. A freelance platform where clients lock payment in a Solidity contract up front, funds release as milestones get approved, and an arbitrator can step in if a job goes sideways.',
    tags: ['Solidity', 'Smart Contracts', 'JavaScript', 'Node.js', 'Web3'],
    liveUrl: 'https://it-project-dusky.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/IT-project',
    highlights: [
      'Wrote the Solidity escrow contract handling deposits, milestone releases, refunds, and disputed states.',
      'Built separate views for clients, freelancers, and arbitrators, plus in-app messaging and ratings.',
      'Synced off-chain job metadata in a Node backend with on-chain contract state.',
    ],
  },
  {
    id: 'celopulse',
    title: 'CeloPulse',
    subtitle: 'Prediction market on Celo · Top 50 in Celo Hackathon',
    year: '2025',
    category: 'Blockchain',
    visualType: 'celopulse',
    description:
      'An on-chain prediction market built for the Celo Hackathon, where it placed in the top 50. Users connect a wallet, back yes/no outcomes on open markets, and claim payouts from the contract once a market settles.',
    tags: ['Solidity', 'Celo', 'Ethers.js', 'React', 'TypeScript', 'Recharts'],
    liveUrl: 'https://celo-pulse.vercel.app',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Celo-Hackathon-2',
    highlights: [
      'Wrote and deployed Solidity contracts on Celo for creating markets, staking positions, and settling payouts.',
      'Hooked up wallet connection and contract calls with Ethers.js, and used Recharts to plot market odds.',
      'Rebuilt the entire app cleanly in a second repo after the initial hackathon version got tangled.',
    ],
  },
  {
    id: 'codementor',
    title: 'CodeMentor',
    subtitle: 'Offline code review & debugging tool powered by Ollama',
    year: '2026',
    category: 'AI & Tools',
    visualType: 'codementor',
    description:
      'A local Python tool I made so I could review project folders and debug stack traces offline through Ollama, without uploading private code to cloud chat tools.',
    tags: ['Python', 'Streamlit', 'Ollama', 'Local LLM'],
    repoUrl: 'https://github.com/Josh-Uzoigwe/Code-Mentor',
    highlights: [
      'Takes a zipped repo, a pasted code snippet/error log, or a screenshot of a terminal/browser error.',
      'Streams output token-by-token from a local Ollama model (gemma4) inside a simple Streamlit UI.',
      'Works completely offline once the local model is pulled.',
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
    liveUrl: 'https://elohim-tech1.vercel.app',
    summary:
      "Built and maintain the company's online gadget store and internal admin pages.",
    bullets: [
      'Built the customer storefront in Next.js and TypeScript, backed by an Express and MongoDB REST API.',
      'Worked on authentication, product catalogue management, live stock indicators, and WhatsApp/payment checkout flows.',
      'Built internal admin dashboards so staff can manage inventory, orders, and basic sales numbers directly.',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Frontend Engineer',
    organization: 'Leoned Africa',
    location: 'Remote',
    period: 'Jun 2024 – Present',
    type: 'Work',
    liveUrl: 'https://frontend1-ashen.vercel.app',
    summary:
      'Frontend developer working on a web-based school administration and learning platform.',
    bullets: [
      'Built dashboard views for students, classes, teachers, and academic year rollovers using Next.js and TypeScript.',
      'Put together a 4-step student enrollment form and shared table/form components used across the platform.',
      'Worked closely with backend engineers to integrate APIs and kept pages usable on mobile screens and slower networks.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Community Manager & Blockchain Developer',
    organization: 'Borderless Tech Club — UNN',
    location: 'Hybrid',
    period: 'Mar 2026 – Present',
    type: 'Leadership',
    summary:
      'Helping run the student Web3 developer community at the University of Nigeria, Nsukka.',
    bullets: [
      'Lead introductory Solidity and DApp development workshops for student cohorts.',
      'Help organize campus build sprints, hackathons, and technical speaker sessions.',
    ],
    stack: ['Solidity', 'Web3', 'Workshops', 'Community'],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    title: 'Base Builder Quest #10 — 2nd Place',
    issuer: 'Base (Coinbase L2)',
    detail:
      'Finished 2nd overall and received the Base Builders Certification for building and shipping on Base.',
    badge: '2nd Place',
  },
  {
    title: 'Celo Hackathon — Top 50',
    issuer: 'Celo',
    detail:
      'Placed in the top 50 with CeloPulse, an on-chain prediction market built with Solidity and React.',
    badge: 'Top 50',
  },
  {
    title: 'B.Sc. Computer Science',
    issuer: 'University of Nigeria, Nsukka',
    detail:
      'Jan 2022 – Oct 2026 · Final-year project: SIWES Activity Tracking System (React web, Expo mobile, Express/MySQL).',
    badge: '2022 – 2026',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    index: '01',
    title: 'Frontend',
    subtitle: 'Web UI',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML & CSS',
    ],
  },
  {
    index: '02',
    title: 'Backend & Databases',
    subtitle: 'APIs & Storage',
    skills: [
      'Node.js',
      'Express.js',
      'Prisma',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'JWT & OAuth',
      'Zod',
    ],
  },
  {
    index: '03',
    title: 'Mobile',
    subtitle: 'Cross-Platform',
    skills: [
      'React Native',
      'Expo',
      'React Navigation',
      'Expo SecureStore',
      'Expo ImagePicker',
    ],
  },
  {
    index: '04',
    title: 'Blockchain',
    subtitle: 'EVM & Smart Contracts',
    skills: [
      'Solidity',
      'Ethers.js',
      'Base (L2)',
      'Celo',
      'Smart Contract Escrow',
    ],
  },
  {
    index: '05',
    title: 'Testing & Deployment',
    subtitle: 'Tooling',
    skills: [
      'Git & GitHub',
      'Docker',
      'Vitest & Jest',
      'Supertest',
      'Playwright',
      'Vercel & Render',
    ],
  },
  {
    index: '06',
    title: 'Python & Local AI',
    subtitle: 'Side Tools',
    skills: [
      'Python',
      'Streamlit',
      'Ollama',
    ],
  },
];
