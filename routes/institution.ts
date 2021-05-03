/*
* api/users
*/

import { Router } from 'express';
import { getInstitution } from '../controllers/institution';


const router = Router ();

router.get('/', getInstitution);