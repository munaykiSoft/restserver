/*
* api/users
*/

import { Router } from 'express';
import { all, postCourse, get } from '../controllers/course';


const router = Router ();

router.get('/:id', get);
router.get('/', all);
router.post('/', postCourse);

export default router;