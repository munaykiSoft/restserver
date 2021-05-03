/*
* api/users
*/

import { Router } from 'express';
import { getLevel } from '../controllers/level';


const router = Router ();

router.get('/', getLevel);