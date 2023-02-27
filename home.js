const express = require("express"); 
const app = express(); 
const port = 3000;

app.use(express.json());

app.use(require("./server/routes/personajesRoutes"));

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)
});