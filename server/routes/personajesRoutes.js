import fs from 'fs';
import express from 'express';
import traerPersonajes from '../data/personajes.json' assert {type:'json'};

export const router = express.Router();

function pathFunction (listaPersonaje) {
    fs.writeFileSync('../CRUD/server/data/personajes.json', // Lugar donde se guarda el archivo
    JSON.stringify(listaPersonaje, null, " ")) // Convierte el objeto javascript en json
};

// Lista completa de personajes
router.get('/', (req, res) => {
    res.send(traerPersonajes)
});

// Personaje según el ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const personaje = traerPersonajes.find((personaje) => personaje.id == id);

    res.send(personaje)
});

// Creación de personaje
router.post('/create', (req, res) => {
    const id = traerPersonajes.length; 
    const nuevoPersonaje = { 
        id: id + 1,
        ...req.body
    };

    traerPersonajes.push(nuevoPersonaje);
    pathFunction(traerPersonajes);

    res.send("Personaje guardado");
});

// Edición de personaje
router.put('/:id/edit', (req, res) => {
    const id = req.params.id; 
    const nuevaLista = traerPersonajes.map(personaje => {
        if (personaje.id == id) { 
            return personaje = {
                id: personaje.id,
                ...req.body
            }
        }
        return personaje;
    });

    pathFunction(nuevaLista);

    res.send("Personaje editado"); 
});

// Eliminación de personaje
router.delete('/:id/delete', (req, res) => {
    const id = req.params.id;
    const nuevaLista = traerPersonajes.filter(personaje => personaje.id != id);
    nuevaLista.forEach((personaje, i) => personaje.id = i + 1);

    pathFunction(nuevaLista);

    res.send("Personaje eliminado")
});
