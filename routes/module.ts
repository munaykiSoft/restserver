/*
* api/users
*/

import { Router } from 'express';
import { getModule } from '../controllers/module';


const router = Router ();

router.get('/', getModule);