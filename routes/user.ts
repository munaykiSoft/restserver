/**
 * api/users
 */

import { Router } from "express";
import { postUser, getUsers } from '../controllers/user';



const router = Router();

router.get('/', getUsers);

// router.put('/:id', userPut);

router.post('/', postUser);

// router.delete('/', userDelete);

// router.patch('/', userPatch);

export default router;