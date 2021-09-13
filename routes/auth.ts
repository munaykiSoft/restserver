/*
 * api/login
 */

import { Router } from "express";
import { login } from "../controllers/auth";
import { getPeople } from '../controllers/people';
import { validateJWT } from '../middlewares/validate-jwt';
import { getUser } from '../controllers/user';



const router = Router();

router.post('/', login);
router.get('/info', [validateJWT, getUser] );
export default router;
