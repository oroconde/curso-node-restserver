const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Ruta de mi aplicación
        this.routes(); //cuando llame a constructor obtenga rutas
    }

    middlewares(){
        //cors
        this.app.use( cors() );

        //Lectura y parceo del body
         this.app.use( express.json() );

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes (){
        this.app.use(this.usuariosPath, require('../routes/user'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server