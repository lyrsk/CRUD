import express from 'express';
import dotenv from 'dotenv'; dotenv.config();
import {router} from './src/routes/personajesRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware

app.use(router);

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
});