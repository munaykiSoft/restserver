import { Request, Response } from 'express';
import { getPeople } from '../models/people';



export const getPeople =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
