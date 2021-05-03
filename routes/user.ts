/*
 * api/users
 */

import { Router } from "express";
import { postUser, getUser } from '../controllers/user';



const router = Router();

router.get('/', getUser);

// router.put('/:id', userPut);

router.post('/', postUser);

// router.delete('/', userDelete);

// router.patch('/', userPatch);

export default router;
