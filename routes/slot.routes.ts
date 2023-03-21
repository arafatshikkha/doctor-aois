import express, { Express, Router } from "express";
import { createSlot, getAllSlot } from "../controller/slot.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/user/slot')
    .post(VerifyToken,createSlot)
    .get(getAllSlot)

router.route('/user/slot/:id')
    .get(getAllSlot)


export default router;