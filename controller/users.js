const { response, request } = require('express')
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

const usersPost = async ( req, res ) => {
    const body = req.body;
    const user = new User( body )

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