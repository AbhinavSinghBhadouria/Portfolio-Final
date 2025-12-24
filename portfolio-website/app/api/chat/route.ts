import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Fallback responses for when API is unavailable
const fallbackResponses = [
  "I'm Abhinav's AI assistant. He's a CSE student at PSIT with an 8.19 CGPA and a Top 10% LeetCoder!",
  "Abhinav specializes in building high-performance backend systems and has worked on projects like Elyvo (interview platform) and Nebula Notes (document processor).",
  "You can reach Abhinav at abhinavsinghbhadouria.cs@gmail.com for any opportunities or collaborations.",
  "Abhinav has solved 600+ coding problems and achieved a 35% latency reduction in real-time systems.",
  "His key projects include Elyvo (using Docker, Stream Video, WebSockets) and Nebula Notes (Python/Node.js document processing)."
];

function getRandomFallback(): string {
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ role: "bot", content: "Invalid request format. Please try again." }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content;
    
    if (!lastMessage || typeof lastMessage !== 'string') {
      return NextResponse.json({ role: "bot", content: "Please provide a valid message." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // If no API key, return fallback response
    if (!apiKey) {
      console.log("No GEMINI_API_KEY found, using fallback response");
      return NextResponse.json({ 
        role: "bot", 
        content: getRandomFallback() + " (Note: AI assistant needs API configuration for full functionality.)" 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

    // This is the "System Prompt" that tells the AI who you are
    const prompt = `
      You are Abhinav's AI Portfolio Assistant. 
      Context:
      - Abhinav is a CSE student at PSIT with an 8.19 CGPA.
      - He is a Top 10% LeetCoder (1750+ rating) with 600+ problems solved.
      - Key Project: Elyvo (Interview platform using Docker, WebSockets, Stream Video).
      - Key Project: Nebula Notes (Document processor using Python/Node).
      - He reduced latency by 35% in real-time systems.
      
      Instructions:
      - Be professional, concise, and slightly futuristic.
      - If asked about contact info, point them to his email: abhinavsinghbhadouria.cs@gmail.com.
      - Answer questions based on this context.
      
      User Question: ${lastMessage}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "bot", content: text });
    
  } catch (error) {
    console.error("Chat API Error:", error);
    
    // Check if it's an API key error
    if (error instanceof Error && error.message.includes("API_KEY_INVALID")) {
      return NextResponse.json({ 
        role: "bot", 
        content: "API configuration error. Please check the API key setup. Here's some info about Abhinav: He's a CSE student at PSIT with an 8.19 CGPA and Top 10% LeetCode rating!" 
      }, { status: 401 });
    }
    
    // For other errors, return a helpful fallback
    return NextResponse.json({ 
      role: "bot", 
      content: getRandomFallback() + " (Temporary system issue. The core systems are still operational!)" 
    }, { status: 200 });
  }
}
