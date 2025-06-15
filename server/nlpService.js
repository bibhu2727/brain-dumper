const OpenAI = require('openai');
if (!process.env.OPENROUTER_API_KEY) { throw new Error("FATAL_ERROR: OPENROUTER_API_KEY not found in .env file."); }
const openrouter = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});
async function getCategoryForThought(thoughtText) {
  const prompt = `You are an expert content categorizer. Assign a single, concise category (1-3 words max) to the user's thought. Examples: "Work Project", "Grocery List", "Personal Reflection". Do not add any extra explanation. Just return the category name. User's thought: "${thoughtText}" Category:`;
  try {
    const response = await openrouter.chat.completions.create({ model: "google/gemini-flash-1.5", messages: [{ role: 'user', content: prompt }], max_tokens: 15, temperature: 0.2, });
    const category = response.choices[0].message.content.trim();
    console.log(`✅ Successfully categorized as: ${category}`);
    return category;
  } catch (error) { console.error("❌ Error from OpenRouter API (Categorization):", error); throw error; }
}
async function getSummaryForThoughts(thoughts, category) {
    const thoughtsText = thoughts.map((t, i) => `${i + 1}. ${t.content}`).join('\n');
    const prompt = `You are a helpful assistant. Summarize the following list of thoughts under the category "${category}" into a few concise bullet points. Provide only the bullet points. \n\nThoughts:\n${thoughtsText}`;
    try {
        const response = await openrouter.chat.completions.create({ model: "google/gemini-flash-1.5", messages: [{ role: 'user', content: prompt }], max_tokens: 200, temperature: 0.5, });
        const summary = response.choices[0].message.content.trim();
        console.log(`✅ Successfully generated summary for: ${category}`);
        return summary;
    } catch (error) { console.error("❌ Error from OpenRouter API (Summary):", error); throw error; }
}
module.exports = { getCategoryForThought, getSummaryForThoughts };
