/*
 * api/users
 */

import { Router } from "express";
import { postUser, get, all } from '../controllers/user';



const router = Router();

router.get('/', all);
router.get('/:id', get);
// router.put('/:id', userPut);

router.post('/', postUser);

// router.delete('/', userDelete);

// router.patch('/', userPatch);

export default router;
