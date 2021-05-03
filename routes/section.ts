/*
* api/users
*/

import { Router } from 'express';
import { getSection } from '../controllers/section';


const router = Router ();

router.get('/', getSection);