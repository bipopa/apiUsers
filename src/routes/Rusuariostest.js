const express = require('express');
const usertest = express.Router();
const users = require('../users.json');
//const libros = require('../data.json');
const under = require('underscore'); // underscore es una biblioteca que permite la busqueda facil entre objetos


usertest.get('/users', (req,res) => {
    
    res.json(users);
});



usertest.post('/signup', (req,res) => {

    const {email,password} = req.body;
    if (email && password) {
       const id = users.length +1;  
       const nuevoUsuario = {id,...req.body};
       users.push(nuevoUsuario);
       
        res.json(users);

    }else{
        res.json('Error en la peticion');
    }

    

});

usertest.put('/users/:id', (req,res) => {
    const{id} =req.params
    const {email,password} = req.body;
    
    if (email && password) {
        under.each(users , (user, i)=>{
            if (user.id == id){
                user.email = email;
                user.password = password;
                
            }
        });
        res.json(users);
     }else {
        res.status(500).json({error: 'hubo un error en el put'});
     }
   

   

});

usertest.delete('/users/:id', (req,res) => {
    const{id} =req.params
    under.each(users , (user, i)=>{
        if (user.id == id){
            users.splice(i,1);
            res.json(users);
        }
    });

   

});

module.exports = usertest;