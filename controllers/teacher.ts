import { Request, Response } from 'express';
import { Teacher } from '../models/teacher';



export const getTeacher =  async(req: Request, res: Response) => {
    try {
        const teachers = await Teacher.find({}).populate('idPeople', '-createdAt -updatedAt'); //funcion populate: funcion para poblar
        res.json(teachers);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con mi tio',
            error
        })
    }
}

export const postTeacher = async(req: Request, res: Response) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.json(teacher);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con mi tio',
            error
        })
    }
}

