/*
 * api/login
 */

import { Router } from "express";
import { login } from "../controllers/auth";
import { validateJWT } from '../middlewares/validate-jwt';
import { get } from '../controllers/user';



const router = Router();

router.post('/', login);
router.get('/info', [validateJWT, get] );
export default router;
