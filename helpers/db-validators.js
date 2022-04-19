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

module.exports = {
    validarRol,
    existeCorreo
}