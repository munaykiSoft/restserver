/*
* api/sections
*/

import { Router } from 'express';
import { getSections, getSection, postSection, putSection } from '../controllers/section';


const router = Router ();

router.get('/', getSections);
router.get('/:id', getSection);
router.post('/new', postSection);
router.put('/:id', putSection);




export default router;