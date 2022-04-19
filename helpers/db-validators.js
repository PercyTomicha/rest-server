const Role = require('../models/role')
const User = require('../models/user')

const validarRol = async ( role = '' ) => {
    const existeRol = await Role.findOne( { role } )
    if( !existeRol ) {
        throw new Error(`El Rol ${role} no está registrado en la Base de Datos`)
    }
}

const existeCorreo = async ( email = '' ) => {
    const existeCorreo = await User.findOne({ email })
    if( existeCorreo ) {
        throw new Error(`El correo ${email}, ya está registrado`)
    }
}

const existeID = async ( id = '' ) => {
    const existeID = await User.findById( id )
    if( !existeID ) {
        throw new Error(`No existe el ID ${id}`)
    }
}

module.exports = {
    validarRol,
    existeCorreo,
    existeID
}