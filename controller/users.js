const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const usersGet = ( req = request, res ) => {
    const { q, nombre = 'Sin Nombre', apiKey, page = 1, limit } = req.query

    res.json({
        'mensaje': 'get API Users',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
}

const usersPatch = ( req, res ) => {
    res.json({
        'mensaje': 'patch API Users'
    })
}

const usersPost = async ( req, res = response ) => {

    const { name, email, password, role} = req.body;
    const user = new User( { name, email, password, role} )

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync( password, salt )

    // Guardar en Base de Datos
    await user.save()

    res.json({
        'mensaje': 'post API Users',
        user
    })
}

const usersPut = ( req, res ) => {
    const { id } = req.params;

    res.json({
        'mensaje': 'put API Users',
        id
    })
}

const usersDelete = ( req, res ) => {
    res.json({
        'mensaje': 'delete API Users'
    })
}

module.exports = {
    usersGet,
    usersPatch,
    usersPost,
    usersPut,
    usersDelete
}