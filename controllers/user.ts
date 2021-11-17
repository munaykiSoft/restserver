import { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt'


export const all =  async(req: any, res: Response) => {
    const { q } = req.query;
    const regex = new RegExp(q, 'i');
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    try {
        const [users, total] = await Promise.all([
            User.find({ status: true })
                .or([{ 'name': regex }, { 'lastname': regex }, { 'cedula': regex }])
                .skip(pageSize * (currentPage - 1))
                .limit(pageSize)
                .sort({ _id: -1 }),
            User.countDocuments({ status: true })
                .or([{ 'name': regex }, { 'lastname': regex }, { 'cedula': regex }])
        ]);
        console.log('hhhhhhhhhhhhh',total)
        res.json({
            users,
            total,
            pageSize
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }
}

export const get =  async(req: any, res: Response) => {
    try {
        const user = await User.findById(req.uid);
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
    const { password, username, ...body } = req.body;
    console.log({ password, username, ...body })
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


    