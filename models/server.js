const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares()

        // Rutas de mi Aplicación
        this.routes()
    }

    middlewares() {
        // CORS
        this.app.use( cors() )

        // Directorio Público
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/users') )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Aplicación escuchando en el puerto : ', this.port)
        })
    }
}

module.exports = Server