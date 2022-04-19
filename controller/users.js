const { response } = require('express')

const usersGet = ( req, res ) => {
    res.json({
        'mensaje': 'get API Users'
    })
}

const usersPatch = ( req, res ) => {
    res.json({
        'mensaje': 'patch API Users'
    })
}

const usersPost = ( req, res ) => {
    res.json({
        'mensaje': 'post API Users'
    })
}

const usersPut = ( req, res ) => {
    res.json({
        'mensaje': 'put API Users'
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