import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION, PROJECTS } from '../constants.js';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Mahindha's personal portfolio website.
Your role is to answer questions from visitors (recruiters, hiring managers) about Mahindha strictly based on the provided context.

Context:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Email: ${PERSONAL_INFO.email}
- About: ${PERSONAL_INFO.about}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Education: ${JSON.stringify(EDUCATION)}
- Projects: ${JSON.stringify(PROJECTS)}

Guidelines:
- Be professional, concise, and polite.
- Speak in the first person plural (e.g., "We," "Mahindha has," "He is") or as a helpful assistant ("Mahindha is skilled in...").
- If asked about something not in the context, say you don't have that information.
- Keep answers short (under 100 words) unless detailed technical explanation is asked.
- Highlight his unique blend of Full Stack dev (1.3 yrs exp) and AI/DS knowledge (B.Tech 2024).
`;

export const sendMessageToGemini = async (message) => {
  if (!process.env.API_KEY) {
    return "I'm sorry, the AI chat service is currently unavailable (Missing API Key). Please contact Mahindha directly via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI. Please try again later.";
  }
};