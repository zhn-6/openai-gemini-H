import worker from "../src/worker.mjs";

export default worker.fetch;

export const config = {
  runtime: "edge", 
  // Available languages and regions for Google AI Studio and Gemini API
  // https://ai.google.dev/gemini-api/docs/available-regions#available_regions
  // Vercel Edge Network Regions
  // https://vercel.com/docs/regions#region-list
  regions: [
    "hkg1",
  ],
};
