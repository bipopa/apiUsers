const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000 //escriba aqui el puerto en el que correra la API.
const morgan = require('morgan');                                                                                                                                                                                                                                                                                                //middlewares                                                                                                                                                                                                         app.use(morgan('dev'));                                                                                                                                                                                                                                                                                                          app.listen(port, () => {
app.set('port', process.env.PORT || port);

//middlewares          
app.use(morgan('dev'));      
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
//routes
app.use(require('./routes/Rtest'));
app.use('/api',require('./routes/Rusuariostest.js'));




app.listen(app.get('port'), () => { console.log('Server escuchando en el puerto %d', port);
});
                                                                  
