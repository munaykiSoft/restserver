/*
* api/users
*/

import { Router } from 'express';
import { getStudent } from '../controllers/student';


const router = Router ();

router.get('/', getStudent);