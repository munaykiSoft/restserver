import { Request, Response } from 'express';
import { Section } from '../models/section';



export const getSections =  async(req: Request, res: Response) => {
    try {
        const section = await Section.find({});
        res.json(section);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const getSection = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const section = await Section.findById(id);
        if (!section) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        res.json(section);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const postSection = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const section = new Section(body);
        await section.save();
        res.json(section);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const putSection = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const sectionDB = await Section.findById(id);
        if (!sectionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        const section = await Section.findByIdAndUpdate(id, req.body, { new: true });
        res.json(section);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

