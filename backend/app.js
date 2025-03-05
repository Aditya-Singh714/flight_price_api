import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import flightRoute from './routes/flight.route.js';

import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/flights', flightRoute);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, async() => {
    console.log(`Flight Price API is running on port http://localhost:${PORT}`);

    await connectToDatabase();
});