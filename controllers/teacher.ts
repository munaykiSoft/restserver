import { Request, Response } from 'express';
import { Teacher } from '../models/teacher';
import { People } from '../models/people';



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
    const { documentNumber } = req.body;
    try {
        const peopleDB = await People.findOne({documentNumber});
        if (peopleDB) {
            const teacher:any = new Teacher(req.body);
            teacher.idPeople = peopleDB._id;
            teacher.people = peopleDB;
            teacher.save();
            return res.json(teacher);
        }
        
        const people = new People(req.body);
        await people.save();
        const teacher: any = new Teacher(req.body);
        teacher.idPeople = people._id;
        teacher.people = people;
        await teacher.save();
        res.json(teacher);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con mi tio',
            error
        })
    }
}

