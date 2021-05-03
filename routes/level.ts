/*
* /api/levels
*/

import { Router } from 'express';
import { getLevel, postLevel } from '../controllers/level';


const router = Router ();

router.get('/', getLevel);
router.post('/new', postLevel);
// router.get('/', getLevel);


export default router;