const express = require("express"); 
const app = express(); 
const port = 3000;

app.use(require("./src/routes/personajesRoutes"));



/*
app.get("/", (req, res) => {
    res.send("Test")
});

app.get("/create", (req, res) => {

});

app.get("/read", (req, res) => {
    const personajes = fs.readFileSync(__dirname + "/src/data/personajes.json");
    res.json(JSON.parse(personajes));
});

app.get("/update", (req, res) => {

});

app.get("/delete", (req, res) => {

}); */

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)
});