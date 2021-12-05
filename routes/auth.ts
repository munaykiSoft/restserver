/*
 * api/login
 */

import { Router } from "express";
import { login, revalidateToken } from "../controllers/auth";
import { validateJWT } from '../middlewares/validate-jwt';
import { get } from '../controllers/user';



const router = Router();

router.post('/', login);
router.get('/info', [validateJWT, get] );
router.get('/renew', validateJWT ,revalidateToken );
export default router;
