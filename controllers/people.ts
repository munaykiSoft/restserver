import { Request, Response } from 'express';
import { People } from '../models/people';



export const getPeoples = async (req: Request, res: Response) => {
    try {
        const peoples = await People.find({});
        res.json(peoples);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            // ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const getPeople = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const people = await People.findById(id);
        if (!people) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        res.json(people);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


export const postPeople = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const people = new People(body);
        await people.save();
        res.json(people);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const putPeople = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const peopleDB = await People.findById(id);
        if (!peopleDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la persona con el id'
            })
        }

        const people = await People.findByIdAndUpdate(id, req.body, { new: true });
        res.json(people);
    } catch (error) {
        console.error();
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}