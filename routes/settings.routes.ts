import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/settings')
    .post(VerifyToken,)
    .get(VerifyToken,)

router.route('/settings/:id')
    .get(VerifyToken,)
    .patch(VerifyToken,)


export default router;