// index.js
const express = require('express');
const jokes = require('./jokes');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/jokes', (req, res) => {
  const shuffled = jokes.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);
  res.json({ jokes: selected });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
