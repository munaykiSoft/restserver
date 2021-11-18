/*
* api/users
*/

import { Router } from 'express';
import { multerUploads } from '../middlewares/multer';
import { postImage } from '../controllers/image';


const router = Router ();

router.post('/', [multerUploads, postImage]  );

export default router;