const { Router } = require('express')
const { usersGet,
        usersPatch,
        usersPost,
        usersPut,
        usersDelete } = require('../controller/users')

const router = Router()


router.get('/', usersGet)

router.patch('/', usersPatch)

router.post('/', usersPost)

router.put('/:id', usersPut)

router.delete('/', usersDelete)

module.exports = router