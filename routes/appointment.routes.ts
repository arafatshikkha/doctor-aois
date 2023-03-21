import express, { Express, Router } from "express";
import { createAppointment, deleteAppointment, getAllAppointment, getByIdAppointment } from "../controller/appointment.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/appointment')
    .post(VerifyToken, createAppointment)
    .get(VerifyToken, getAllAppointment)

router.route('/appointment')
    .get(VerifyToken, getByIdAppointment)
    .delete(VerifyToken, deleteAppointment)

export default router;