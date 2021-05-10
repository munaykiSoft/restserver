/*
* /api/levels
*/

import { Router } from 'express';
import { getLevel, getLevels, postLevel, putLevel } from '../controllers/level';


const router = Router ();

router.get('/', getLevels);
router.get('/:id', getLevel);
router.post('/new', postLevel);
router.put('/:id', putLevel);


export default router;