import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function runChat(prompt) {
  console.log("runChat started");
  console.log("Prompt received:", prompt);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    });

    console.log("Gemini Response:", response.text);

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);

    return null;
  }
}

export default runChat;
