import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(234).send('Welcome Buddy!');
});

app.post('/api/shorten', async (req, res) => {
  try {
    const { url } = req.body;
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${encodeURIComponent(url)}`,
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(5555, () => {
  console.log('Proxy server running on http://localhost:5555');
});