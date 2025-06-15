require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getCategoryForThought, getSummaryForThoughts } = require('./nlpService');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.post('/api/categorize', async (req, res) => {
  const { thought } = req.body;
  if (!thought) return res.status(400).json({ error: 'Thought text is required.' });
  try {
    const category = await getCategoryForThought(thought);
    res.json({ category });
  } catch (error) { res.status(500).json({ error: 'Failed to categorize thought.' }); }
});
app.post('/api/summarize', async (req, res) => {
    const { thoughts, category } = req.body;
    if (!thoughts || thoughts.length === 0) return res.status(400).json({ error: 'Thoughts are required for summary.' });
    try {
        const summary = await getSummaryForThoughts(thoughts, category);
        res.json({ summary });
    } catch (error) { res.status(500).json({ error: 'Failed to generate summary.' }); }
});
app.listen(PORT, () => console.log(`✅ Server v2.0 listening on port ${PORT}`));
