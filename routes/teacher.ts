/*
* api/users
*/

import { Router } from 'express';
import { getTeacher } from '../controllers/teacher';


const router = Router ();

router.get('/', getTeacher);