const { response, request } = require('express');


const userGet =  (req = request, res = response) => {

    const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',

    });
}

const userPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - userPOST'
    })


}

const userPut = (res, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - userPUT',
    })
}


