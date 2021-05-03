/*
* api/users
*/

import { Router } from 'express';
import { getServer } from '../controllers/server';


const router = Router ();

router.get('/', getServer);