import { Request, Response } from 'express';
import { Level } from '../models/level';



export const getLevels = async (req: Request, res: Response) => {
    try {
        const levels = await Level.find({});
        res.json(levels);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const getLevel = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const level = await Level.findById(id);
        if (!level) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        res.json(level);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


export const postLevel = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const level = new Level(body);
        await level.save();
        res.json(level);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const putLevel = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const levelDB = await Level.findById(id);
        if (!levelDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        const level = await Level.findByIdAndUpdate(id, req.body, { new: true });
        res.json(level);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


