/*
* api/users
*/

import { Router } from 'express';
import { getTeacher, postTeacher } from '../controllers/teacher';


const router = Router ();

router.get('/', getTeacher);
router.post('/new', postTeacher);


export default router;