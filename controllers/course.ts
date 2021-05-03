import { Request, Response } from 'express';
import { Course } from '../models/course';



export const getCourse =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}
