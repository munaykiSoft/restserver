import { Request, Response } from 'express';
import { dataUri } from '../middlewares/multer';
import { Course } from '../models/course';



export const all = async(req: Request, res: Response) => {
    try {
        const courses = await Course.find({})
        res.json(courses);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        })
    }
}

export const postCourse = async(req: Request, res: Response) => {
    const { body } = req;
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

export const postImage = async(req: Request, res: Response) => {
    try {
        const file = dataUri(req).content;
    } catch (error) {
        
    }
}



