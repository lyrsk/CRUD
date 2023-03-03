import {router} from './server/routes/personajesRoutes.js';
import express from 'express';

const app = express();

app.use(express.json());

app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
});