/*
* api/users
*/

import { Router } from 'express';
import { getCourse, postCourse } from '../controllers/course';


const router = Router ();

router.get('/', getCourse);
router.post('/', postCourse);

export default router;