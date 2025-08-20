import { generateResponse } from "./server/llm";

(async () => {
  const resp = await generateResponse("Hi");
  console.log(resp);
})();
