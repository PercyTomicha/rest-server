const express = require('express')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // Middlewares
        this.middlewares()

        // Rutas de mi Aplicación
        this.routes()
    }

    middlewares() {
        // Directorio Público
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.get('/saludo', ( req, res ) => {
            res.send('Hola Mundo!')
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Aplicación escuchando en el puerto : ', this.port)
        })
    }
}

module.exports = Server