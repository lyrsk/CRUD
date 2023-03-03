import express from 'express';
import {router} from './server/routes/personajesRoutes.js';

const port = 3000;
const app = express();

app.use(express.json()); // Middleware

app.use(router);

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
});