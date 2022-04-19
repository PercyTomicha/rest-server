const { Router } = require('express')
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos')
const { validarRol, existeCorreo, existeID } = require('../helpers/db-validators')

const { usersGet,
        usersPatch,
        usersPost,
        usersPut,
        usersDelete } = require('../controller/users')

const router = Router()


router.get('/', usersGet)

router.patch('/', usersPatch)

router.post('/', [
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'email', 'El correo no es válido' ).isEmail(),
    check( 'email' ).custom( existeCorreo ), 
    check( 'password', 'El password debe tener al menos 6 caracteres' ).isLength({ min: 6 }),
    // check( 'role', 'No es un rol válido' ).isIn( ['ADMIN_ROLE', 'USER_ROLE'] ),
    check( 'role' ).custom( validarRol ),
    validarCampos
], usersPost)

router.put('/:id', [
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id' ).custom( existeID ),
    check( 'role' ).custom( validarRol ),
    validarCampos
]
, usersPut)

router.delete('/:id', [
    check( 'id', 'No es un ID válido' ).isMongoId(),
    check( 'id' ).custom( existeID ),
    validarCampos
]
, usersDelete)

module.exports = router