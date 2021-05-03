import { Request, Response } from 'express';
import { Institution } from '../models/institution';



export const getInstitution =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
