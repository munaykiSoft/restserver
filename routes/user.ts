/*
 * api/users
 */

import { Router } from "express";
import { postUser, get, all } from '../controllers/user';
import { validateJWT } from "../middlewares/validate-jwt";



const router = Router();

router.get('/', validateJWT, all);
router.get('/:id', get);
// router.put('/:id', userPut);

router.post('/', postUser);

// router.delete('/', userDelete);

// router.patch('/', userPatch);

export default router;