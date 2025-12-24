import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // Use gemini-1.5-flash for speed and lower latency
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `
      You are the AI Assistant for Abhinav Singh Bhadouria's Portfolio.
      
      Abhinav's Profile:
      - Education: CS Undergraduate at PSIT (8.19 CGPA).
      - Achievement: 1681 LeetCode Rating (Top 15%), 500+ problems solved.
      - Core Project: Elyvo - A real-time interview engine using Docker for code isolation and Stream for video.
      - Core Project: Nebula Notes - An intelligent document processor using Python/Node.
      - Expertise: Backend Architecture, Applied ML, Latency Reduction (35% achieved in Elyvo).
      
      Guidelines:
      - Answer concisely and professionally.
      - Maintain a "futuristic/high-tech" persona.
      - If asked about contact, provide his email: abhinavsinghbhadouria.cs@gmail.com.
      - If you don't know an answer, suggest the user contact Abhinav directly via the contact form.
      
      User Question: ${lastMessage}
    `;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "bot", content: text });
  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json(
      { role: "bot", content: "Apologies. My neural pathways are temporarily offline. Please try again in a moment." },
      { status: 500 }
    );
  }
}