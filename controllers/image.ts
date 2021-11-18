import { Request, Response } from 'express';
import { uploader } from '../handlers/cloudinary';
import { dataUri } from '../middlewares/multer';


export const postImage = async(req: Request, res: Response) => {
    try {
        const file = dataUri(req).content;
        const { public_id, eager } =  await uploader.upload(file,{
            use_filename: false,
            format: 'webp',
            eager: [
                { width: 360, height: 266, crop: 'pad' }
            ]
        })
        res.json({
            id: public_id,
            url: eager[0].secure_url
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        })
    }
}



