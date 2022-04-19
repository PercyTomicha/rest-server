const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // Conectar a Base de Datos
        this.conectarDB()

        // Middlewares
        this.middlewares()

        // Rutas de mi Aplicación
        this.routes()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        // CORS
        this.app.use( cors() )

        // Lectura y Parseo del Body
        this.app.use( express.json() )

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