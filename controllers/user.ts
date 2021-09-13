import { Request, Response } from "express";
import { User } from '../models/user';
import bcrypt from 'bcrypt'


export const getUser =  async(req: any, res: Response) => {
    try {
        const user = await User.findById(req.uid).populate('people');
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        })
    }
}


export const postUser = async(req: Request, res: Response) => {
    const { password, username } = req.body;
    try {
        const userDB = await User.findOne({username});
        if (userDB) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrado el usuario'
            })
        }
        const user = new User(req.body);
        // Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        })
    }
}

// const userPut = (res, res = response) => {

//     const { id } = req.params;

//     res.json({
//         msg: 'put API - userPUT',
//     })
// }


    