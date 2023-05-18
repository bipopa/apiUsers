const express = require('express');


const routertest = express.Router();

routertest.get('/', (req,res) => {res.json({"Title" : "Hola Mundo"})});
routertest.get('/test', (req,res) => {
    
    const  data = {
        "nombre": "Alvaro",
        "website": "servicios.com"
    };
    
    res.json(data);
});
module.exports = routertest;