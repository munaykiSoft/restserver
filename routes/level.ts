/*
* /api/levels
*/

import { Router } from 'express';
import { getLevel, postLevel, getLevels, putLevel } from '../controllers/level';


const router = Router ();

router.get('/', getLevels);
router.post('/new', postLevel);
router.get('/:id', getLevel);
router.put('/:id', putLevel);


export default router;