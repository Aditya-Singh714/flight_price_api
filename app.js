import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.get("/", (req, res) => res.send("Flight API is running"));

app.listen(PORT, () => console.log(`Flighr Price API is running on port http://localhost:${PORT}`));