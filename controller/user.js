const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {    
    const { q, apodo = " sin apodo ", apikey, page = 1, limit} = req.query
    
    res.json({
        msg: 'get API - usuariosGet',
        q,
        apodo,
        apikey,
        page,
        limit
    })
};

const usuariosPost = (req, res = response) => {
    const { nombre, apellidos, edad, id} = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        apellidos,
        edad,
        id
    })
};

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    })
};

const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    })
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};