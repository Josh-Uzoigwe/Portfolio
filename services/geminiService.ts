import { GoogleGenAI } from '@google/genai';
import { PROJECTS, SKILLS, PERSONAL_INFO, EXPERIENCE, CREDENTIALS } from '../constants';

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch {
  ai = null;
}

const SYSTEM_INSTRUCTION = `
You are an assistant on the portfolio of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.
Represent Joshua accurately and concisely to recruiters, hiring managers, and clients.

Profile:
- Role: Full-time Full-Stack Software Engineer; expanding into React Native / Expo mobile development; builds Solidity smart contracts & DApps on the side.
- Location: ${PERSONAL_INFO.location}
- Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
- Experience:
${EXPERIENCE.map((e) => `  - ${e.role} at ${e.organization} (${e.period}): ${e.summary}`).join('\n')}
- Projects:
${PROJECTS.map((p, i) => `  ${i + 1}. ${p.title} (${p.category}): ${p.description} [Tech: ${p.tags.join(', ')}]`).join('\n')}
- Credentials:
${CREDENTIALS.map((c) => `  - ${c.title} (${c.issuer})`).join('\n')}
- Skills: ${SKILLS.map((s) => `${s.title}: ${s.skills.join(', ')}`).join(' | ')}

Keep replies under 120 words, direct, and grounded in these facts only.
`;

function localFallbackReply(message: string): string {
  const q = message.toLowerCase();

  if (q.includes('mobile') || q.includes('react native') || q.includes('expo') || q.includes('app')) {
    return `Joshua is actively building cross-platform mobile apps with React Native and Expo. His flagship CS final-year project, the SIWES Activity Tracking System (SATS), includes an Expo mobile companion app featuring Expo SecureStore auth, image-picker evidence uploads, and React Navigation synced with an Express + Prisma + MySQL API.`;
  }

  if (q.includes('blockchain') || q.includes('web3') || q.includes('solidity') || q.includes('celo') || q.includes('base') || q.includes('smart contract')) {
    return `On the blockchain side, Joshua writes Solidity smart contracts and full-stack DApps. Highlights include CeloPulse (Top 50 in the Celo Hackathon), a Decentralized Freelance Escrow system with milestone payouts and arbitration, and finishing 2nd place in Base Builder Quest #10 (Base Builders Certification).`;
  }

  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('elohim') || q.includes('leoned')) {
    return `Joshua works full-time as a Software Engineer: he is a Full-Stack Engineer at Elohimtech (Oct 2024 – Present, building a Next.js + Express + MongoDB e-commerce platform) and Frontend Engineer at Leoned Africa (2024 – Present, leading Next.js/TypeScript UI architecture). He also mentors Web3 builders at Borderless Tech Club UNN.`;
  }

  if (q.includes('project') || q.includes('github') || q.includes('built') || q.includes('portfolio')) {
    return `Joshua's top featured projects include: (1) SIWES Activity Tracking System — Web + React Native/Expo + Express/MySQL; (2) Northstone — Next.js + Prisma investment platform with 2FA & Playwright/Vitest; (3) Leoned Africa — Next.js 16 school management platform with a 4-step student enrollment wizard & custom design system; (4) ElohimTech Gadgets E-Commerce; (5) Decentralized Freelance Escrow (Solidity); (6) CeloPulse Prediction Market; and (7) CodeMentor — an offline Python/Ollama debugging copilot.`;
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('tech')) {
    return `Joshua's core stack spans TypeScript, React, Next.js, Tailwind CSS, Node.js, Express, Prisma, MongoDB, and MySQL — plus React Native & Expo for mobile, Solidity & Ethers.js for Web3, and Docker, Vitest, Jest, Playwright, and Python/Ollama for testing and AI tooling.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('cv') || q.includes('resume')) {
    return `You can reach Joshua at ${PERSONAL_INFO.email} or ${PERSONAL_INFO.phone}, connect on GitHub (Josh-Uzoigwe) or LinkedIn, or download his updated PDF CV directly from the Resume button in the navigation bar.`;
  }

  return `Uzoigwe Joshua is a Full-Stack Software Engineer (TypeScript, Next.js, Node.js, Prisma, MongoDB/MySQL) expanding into React Native/Expo mobile apps and building Solidity DApps on the side (2nd Place Base Builder Quest #10, Top 50 Celo Hackathon). Ask me about his projects, tech stack, experience, or how to get in touch!`;
}

export const sendMessageToAssistant = async (
  history: { role: string; content: string }[],
  message: string
): Promise<string> => {
  if (!ai) {
    return localFallbackReply(message);
  }

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map((h) => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
        { role: 'user', parts: [{ text: message }] },
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
        maxOutputTokens: 260,
      },
    });

    return result.text || localFallbackReply(message);
  } catch {
    return localFallbackReply(message);
  }
};
