const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const traerPersonajes =JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/personajes.json")));

router.get("/", (req, res) => {
    res.send(traerPersonajes);
});

module.exports = router;