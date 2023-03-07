import express from 'express';
import dotenv from 'dotenv'; dotenv.config();
import {router} from './server/routes/personajesRoutes.js';

const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // Middleware

app.use(router);

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
});