import express, { Express, Router } from "express";
import { createService, deleteService, getAllService, getByIdService, updateService } from "../controller/service.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/service')
    .post(VerifyToken,createService)
    .get(getAllService)

router.route('/service')
    .delete(VerifyToken,deleteService)
    .get(getByIdService)
    .patch(VerifyToken, updateService)

export default router;