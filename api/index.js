const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

// This tries to connect to the 'mongo' service
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected to my-api'))
  .catch(err => console.error(err));

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from the API Tier!');
});

// The route we want to test
app.get('/data', (req, res) => {
  res.json({ message: 'This data came from the API', timestamp: new Date() });
});

// This is the crucial part: it keeps the server running
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
