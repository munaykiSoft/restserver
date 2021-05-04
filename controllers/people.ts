import { Request, Response } from 'express';
import { People } from '../models/people';



export const getPeople =  async(req: Request, res: Response) => {

    try {
        const peoples = await People.find({});
        res.json(peoples)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'get API - controller',
        });
        
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


