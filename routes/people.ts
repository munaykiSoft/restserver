/*
* api/users
*/

import { Router } from 'express';
import { getPeople } from '../controllers/people';


const router = Router ();

router.get('/', getPeople);