import React from 'react';
import { Project, SkillCategory } from './types';
import { Layout, Server, Database, Box, Terminal, Cpu } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Uzoigwe Joshua",
  title: "Full-Stack DApp Developer",
  tagline: "Building beautiful, interactive, and secure decentralized applications.",
  about: "I am a Full-Stack Developer with a deep focus on the intersection of modern web architectures and decentralized technologies. With expertise ranging from React and Node.js to Solidity and the Celo ecosystem, I bridge the gap between intuitive user experiences and complex blockchain logic. I don't just write code; I engineer solutions that are scalable, secure, and user-centric.",
  email: "uzoigwejoshua2@gmail.com",
  github: "https://github.com/Josh-Uzoigwe",
  linkedin: "https://www.linkedin.com/in/joshua-uzoigwe-4b5411239"
};

export const PROJECTS: Project[] = [
  {
    id: 'uniquelounge',
    title: 'Unique Lounge',
    description: 'A modern, high-fidelity web presence for a premium lounge, featuring an immersive UI for menu browsing and services.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/uniquelounge/800/450',
    liveUrl: 'https://unique-lounge.vercel.app/',
    repoUrl: 'https://github.com/Josh-Uzoigwe/unique-lounge', // Placeholder repo URL
    highlights: [
      'Designed a sleek, dark-mode aesthetic to match the brand identity.',
      'Implemented responsive layouts optimized for mobile users.',
      'Utilized modern CSS animations for a premium user feel.'
    ]
  },
  {
    id: 'elohimtech',
    title: 'Elohim Tech',
    description: 'A corporate portfolio for a technology solutions provider, emphasizing service clarity, trust, and professional design.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX'],
    imageUrl: 'https://picsum.photos/seed/elohim/800/450',
    liveUrl: 'https://elohim-tech.vercel.app/',
    repoUrl: 'https://github.com/Josh-Uzoigwe/elohim-tech', // Placeholder repo URL
    highlights: [
      'Built a high-performance landing page with Next.js.',
      'Structured content hierarchy for improved SEO and readability.',
      'Created reusable component architecture for future scalability.'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Full-Stack E-Commerce',
    description: 'A comprehensive e-commerce platform featuring a robust REST API, secure authentication, and a responsive frontend shopping experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/450',
    repoUrl: 'https://github.com/Josh-Uzoigwe/e-commerce-store',
    highlights: [
      'Implemented full authentication flow with JWT and bcrypt.',
      'Designed a scalable MongoDB schema for products, users, and orders.',
      'Built a responsive cart and checkout UI with real-time state management.',
      'Engineered a clean separation of concerns between client and server.'
    ]
  },
  {
    id: 'celopulse',
    title: 'CeloPulse DApp',
    description: 'A decentralized prediction and data application deployed on the Celo blockchain, enabling trustless user interactions via smart contracts.',
    tags: ['Solidity', 'Celo', 'Web3.js', 'React', 'Smart Contracts'],
    imageUrl: 'https://picsum.photos/seed/celo/800/450',
    liveUrl: 'https://celo-pulse.vercel.app/',
    repoUrl: 'https://github.com/Josh-Uzoigwe/Celo-Hackathon-2',
    highlights: [
      'Wrote and deployed optimized Solidity smart contracts on Celo.',
      'Integrated wallet connection (Metamask/CeloExtension) for seamless transaction signing.',
      'Visualized on-chain data in real-time using modern frontend libraries.',
      'Prioritized gas optimization and security in contract architecture.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication (JWT)', 'API Design']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'Mongoose', 'Schema Design', 'Data Aggregation']
  },
  {
    title: 'Blockchain',
    icon: <Box className="w-6 h-6" />,
    skills: ['Solidity', 'Celo Ecosystem', 'Web3.js / Ethers.js', 'Smart Contracts', 'Hardhat']
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git & GitHub', 'Vercel', 'Docker', 'CI/CD Basics', 'Postman']
  },
  {
    title: 'AI Workflow',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['Prompt Engineering', 'Code Scaffolding', 'Debugging Assistant', 'Generative UI']
  }
];