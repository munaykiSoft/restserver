/*
* api/peoples
*/

import { Router } from 'express';
import { getPeople, postPeople } from '../controllers/people';


const router = Router ();

router.get('/', getPeople);
router.post('/new', postPeople);








export default router;