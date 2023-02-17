const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require("fs");

const traerPersonajes =JSON.parse(fs.readFileSync(this.patch.resolve(__dirname, "../data/personajes.json")));

module.exports = router;