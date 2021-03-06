const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const usersGet = async ( req = request, res ) => {
    const { desde = 0, limite = 5 } = req.query
    const query = { state : true }

    const [ total, users ] = await Promise.all([
        User.countDocuments( query ),
        User.find( query )
            .skip( Number( desde ) )
            .limit( Number( limite ) )
    ])

    res.json({
        mensaje: 'get API Users',
        total,
        users
    })
}

const usersPatch = async ( req, res ) => {
    const { id } = req.params;

    const user = await User.findById( id )

    res.json({
        mensaje: 'patch API Users',
        user
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
        mensaje: 'post API Users',
        user
    })
}

const usersPut = async ( req, res = response ) => {
    const { id } = req.params;
    const { _id, email, google, password, ...data } = req.body;

    // Encriptar la contraseña
    if( password ){
        const salt = bcryptjs.genSaltSync()
        data.password = bcryptjs.hashSync( password, salt )
    }

    const user = await User.findByIdAndUpdate( id, data )

    res.json({
        mensaje: 'put API Users',
        user
    })
}

const usersDelete = async ( req, res ) => {
    const { id } = req.params;

    // Borrado Físico
    // const user = await User.findByIdAndDelete( id )

    // Borrado Lógico
    const user = await User.findByIdAndUpdate( id, { state: false } )

    res.json({
        mensaje: 'delete API Users',
        user
    })
}

module.exports = {
    usersGet,
    usersPatch,
    usersPost,
    usersPut,
    usersDelete
}