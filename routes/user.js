//desestruturar el paquete de express
const { Router } = require('express');
const { usuariosGet, usuariosDelete, usuariosPost, usuariosPut } = require('../controller/user');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete );


module.exports = router;