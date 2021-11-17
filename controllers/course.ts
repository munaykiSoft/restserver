import { Request, Response } from 'express';
import { Course } from '../models/course';



export const getCourse =  (req: Request, res: Response) => {

    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;

    res.json({
        msg: 'get API - controller',
    });
}

export const postCourse = async(req: Request, res: Response) => {
    const { body } = req;
    console.log(body);
    try {
        const course = new Course(body);
        await course.save();
        res.json(course);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        })
    }
}



