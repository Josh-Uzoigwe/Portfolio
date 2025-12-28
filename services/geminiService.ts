import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, PERSONAL_INFO } from '../constants';

// NOTE: Ideally, the API key should be in process.env.API_KEY.
// For this portfolio demo, we assume the environment is correctly set up.
// If process.env.API_KEY is missing, the chat widget will gracefully handle the error state.

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the portfolio of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
Your goal is to represent Joshua professionally to recruiters and clients.
Keep answers concise, professional, and relevant to software engineering.

Context:
- Bio: ${PERSONAL_INFO.about}
- Key Projects:
${PROJECTS.map((p, i) => `  ${i + 1}. ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}
- Skills: ${SKILLS.map(s => s.skills.join(', ')).join(', ')}
- Contact: ${PERSONAL_INFO.email}

If asked about something not in this context, politely steer the conversation back to Joshua's skills and experience.
Do not make up facts. If you don't know, suggest contacting Joshua directly.
`;

export const sendMessageToGemini = async (history: {role: string, content: string}[], message: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key not configured");
  }

  try {
    const model = ai.models;
    
    // Construct a history-aware prompt or use chat session if maintaining state server-side.
    // For this simple client-side implementation, we will concatenate context lightly or just send a fresh request with system instruction.
    // Ideally, use chat.sendMessage for history, but here we'll use generateContent for simplicity in a single-turn styling or manage history manually.

    const result = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({
           role: h.role === 'assistant' ? 'model' : 'user',
           parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
