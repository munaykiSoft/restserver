import { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import { generateJWT } from '../helpers/jwt';


export const login =  async (req: Request, res: Response) => {
    const  { cedula, password } = req.body;
    try {
        const userDB = await User.findOne({cedula});
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario y/o contraseña incorrecto'
            })
        }
        
        const validPassword = bcrypt.compareSync( password, userDB.password);
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario y/o contraseña incorrecto'
            })
        }
        console.log(userDB);
        const token = await generateJWT(userDB._id);
        res.json({
            ok: true,
            token,
            uid: userDB.id,
            name: `${userDB.name} ${userDB.lastname}`
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }
}

export const revalidateToken = async(req:any, res: any) => {
    const { uid } = req;
    const token = await generateJWT( uid );
    const userDB = await User.findById( uid );
    res.json({
        ok: true,
        token,
        uid: userDB?.id,
        name: `${userDB?.name} ${userDB?.lastname}`
    })
}
