import { Request, Response } from 'express';
import { Teacher } from '../models/teacher';
import { People } from '../models/people';


//Te traer todos los docentes
export const getTeachers =  async(req: Request, res: Response) => {
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

//Te trae un docente por id
export const getTeacher = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teacher = await Teacher.findById(id);
        if (!teacher) {
            return res.status(404).json({
                msg: 'No existe ese profesor con ese id'
            })
        }
        res.json(teacher);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
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

export const putTeacher = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teacherDB:any = await Teacher.findById(id);
        if (!teacherDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la persona con el id'
            })  
        }

        const people = await People.findByIdAndUpdate(teacherDB.idPeople, req.body, { new: true});
        const changeTeacher = {
            ...req.body, 
            people: people
        }
        const teacher = await Teacher.findByIdAndUpdate(id, changeTeacher, { new: true });
        res.json(teacher);
        

    } catch (error) {
        console.error();
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })    
    }
}
