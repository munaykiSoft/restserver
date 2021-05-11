/*
* api/teachers
*/

import { Router } from 'express';
import { getTeachers, postTeacher, putTeacher, getTeacher } from '../controllers/teacher';


const router = Router ();

router.get('/', getTeachers);
router.get('/:id', getTeacher)
router.post('/new', postTeacher);
router.put('/:id', putTeacher);


export default router;