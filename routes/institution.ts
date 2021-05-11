/*
* api/institutions
*/

import { Router } from 'express';
import { getInstitutions, getInstitution, postInstitution, putInstitution } from '../controllers/institution';


const router = Router ();

router.get('/', getInstitutions);
router.get('/:id', getInstitution);
router.post('/new', postInstitution);
router.put('/:id', putInstitution);






export default router;
