import { Request, Response } from 'express';
import { Section } from '../models/section';



export const getSection =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
