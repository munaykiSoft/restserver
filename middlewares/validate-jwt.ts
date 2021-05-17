import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';


export const validateJWT = (req: any, res: Response, next: NextFunction) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    }
    try {
        const decode: any = jwt.verify( token,  process.env.JWT_SECRET || 'Qdqwerwq32asdqa34ewadf3443t' );
        req.uid = decode.uid;
        next();
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'token incorrecto'
        })
    }
}