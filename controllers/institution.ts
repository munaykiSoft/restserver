import { Request, Response } from 'express';
import { Institution } from '../models/institution';



export const getInstitutions =  async(req: Request, res: Response) => {
    try {
        const institutions = await Institution.find({});
        res.json(institutions);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const getInstitution = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const institution = await Institution.findById(id);
        if (!institution) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        res.json(institution);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


export const postInstitution = async(req: Request, res:Response) => {
    const { body } = req;
    try {
        const institution = new Institution(body);
        await institution.save();
        res.json(institution);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

export const putInstitution = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const institutionDB = await Institution.findById(id);
        if (!institutionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            })
        }

        const institution = await Institution.findByIdAndUpdate(id, req.body, { new: true });
        res.json(institution);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


