/*
* api/peoples
*/

import { Router } from 'express';
import { getPeoples, getPeople, postPeople, putPeople} from '../controllers/people';


const router = Router ();

router.get('/', getPeoples);
router.get('/:id', getPeople);
router.post('/new', postPeople);
router.put('/:id', putPeople);


export default router;