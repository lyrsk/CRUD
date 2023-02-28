const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const traerPersonajes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/personajes.json")));

router.get("/", (req, res) => {
    res.send(traerPersonajes)
});
/*
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const personaje = traerPersonajes.find((personaje) => personaje.id == id);
    res.send(personaje)
});
*/
router.post("/create", (req, res) => {
    const id = traerPersonajes.length;
    const nuevoPersonaje = { 
        id: id + 1,
        ...req.body
    }; 
    traerPersonajes.push(nuevoPersonaje); 
    fs.writeFileSync(
        path.resolve(__dirname, "..data/personajes.json"),  // Guarda el objeto en el archivo
        JSON.stringify(traerPersonajes, null, " ")  // Convierte el objeto javascript en objeto json (?
    );

    res.send("Personaje guardado")
});

module.exports = router;