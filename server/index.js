import express from 'express';
import Chance from 'chance';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const chance = new Chance();
const users = [...Array(250).keys()].map((id) => {
  return {
    id,
    name: chance.name(),
    company: chance.company(),
    email: chance.email(),
    avatar: chance.avatar(),
  };
});

app.get('/api/users', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const results = users.filter((user) => user.name.toLowerCase().includes(q));
  res.send(results);
});

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Avatar API!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
