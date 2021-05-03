import { Request, Response } from "express";
import { User } from '../models/user';


export const getUser =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}


export const postUser = async(req: Request, res: Response) => {
    // const { body } = req;
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado...'
        })
    }
}

// const userPut = (res, res = response) => {

//     const { id } = req.params;

//     res.json({
//         msg: 'put API - userPUT',
//     })
// }


