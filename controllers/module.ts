import { Request, Response } from 'express';
import { getModule } from '../models/module';



export const getModule =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
