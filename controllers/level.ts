import { Request, Response } from 'express';
import { Level } from '../models/level';



export const getLevel =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
