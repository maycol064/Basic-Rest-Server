const express = require( 'express' ),
    cors      = require( 'cors' ); 

class Server {
    constructor() {
        this.app       = express();
        this.port      = process.env.PORT;
        this.usersPath = '/api/users';

        //! Middlewares ( Funciones que siempre se ejecutan cuando se inicia el servidor )
        this.middlewares();

        //! Rutas de la aplicación
        this.routes();
    }

    middlewares() {
        //* CORS
        this.app.use( cors() );

        //? Lectura y parseo del body
        this.app.use( express.json() );

        //* Directorio público
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.usersPath, require( '../routes/user.routes' ) );       
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server is running on port ', process.env.PORT );
        } );
    }
}

module.exports = Server;