import { Request, Response } from 'express';
import { Teacher } from '../models/teacher';



export const getTeacher =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
