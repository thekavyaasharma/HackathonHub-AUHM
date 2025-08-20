import fetch from "node-fetch";

// Define the expected response structure from Ollama
interface OllamaResponse {
  response: string;
}

export async function generateResponse(prompt: string): Promise<string> {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gemma:2b",
      prompt,
      stream: false,
    }),
  });

  const rawData = await response.json();

  if (
    typeof rawData !== "object" ||
    rawData === null ||
    !("response" in rawData) ||
    typeof (rawData as any).response !== "string"
  ) {
    throw new Error("Invalid response from Ollama API");
  }

  const data: OllamaResponse = rawData as OllamaResponse;
  return data.response;
}
