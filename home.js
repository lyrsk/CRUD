const express = require("express"); 
const app = express();

app.use(express.json());

app.use(require("./server/routes/personajesRoutes"));

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
});