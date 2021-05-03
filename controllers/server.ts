import { Request, Response } from 'express';
import { getServer } from '../models/server';



export const getServer =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
