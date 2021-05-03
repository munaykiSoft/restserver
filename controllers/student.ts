import { Request, Response } from 'express';
import { getStudent } from '../models/student';



export const getStudent =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
