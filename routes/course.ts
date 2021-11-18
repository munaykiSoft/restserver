/*
* api/users
*/

import { Router } from 'express';
import { all, postCourse } from '../controllers/course';


const router = Router ();

router.get('/', all);
router.post('/', postCourse);

export default router;