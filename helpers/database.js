const Role = require('../models/role')

const validarRol = async ( role = '' ) => {
    const existeRol = await Role.findOne( { role } )
    if( !existeRol ) {
        throw new Error(`El Rol ${role} no está registrado en la Base de Datos`)
    }
}

module.exports = {
    validarRol
}