import express, { Express, Router } from "express";
import { createAbout, getAllAbout, getByIdAbout, updateAbout } from "../controller/about.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/about')
    .post(VerifyToken,createAbout)
    .get(VerifyToken,getAllAbout)

router.route('/about/:id')
    .patch(VerifyToken,updateAbout)
    .get(VerifyToken,getByIdAbout)

export default router;