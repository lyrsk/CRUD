const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Test")
});

app.get("/create", (req, res) => {

});

app.get("/read", (req, res) => {

});

app.get("/update", (req, res) => {

});

app.get("/delete", (req, res) => {

});

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)
});