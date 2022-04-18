const express = require('express')
const cors = require('cors')

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
        // CORS
        this.app.use( cors() )

        // Directorio Público
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.get('/saludo', ( req, res ) => {
            res.json({
                'mensaje': 'get Hola Mundo!'
            })
        })
        
        this.app.put('/saludo', ( req, res ) => {
            res.json({
                'mensaje': 'put Hola Mundo!'
            })
        })
        
        this.app.post('/saludo', ( req, res ) => {
            res.json({
                'mensaje': 'post Hola Mundo!'
            })
        })
        
        this.app.delete('/saludo', ( req, res ) => {
            res.json({
                'mensaje': 'delete Hola Mundo!'
            })
        })
        
        this.app.patch('/saludo', ( req, res ) => {
            res.json({
                'mensaje': 'patch Hola Mundo!'
            })
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Aplicación escuchando en el puerto : ', this.port)
        })
    }
}

module.exports = Server