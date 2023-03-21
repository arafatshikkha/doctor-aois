import express, { Express, Router } from "express";
import { createFeedback, deleteFeedback, getAllFeedback, getByIdFeedback, updateFeedback } from "../controller/feedback.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/feedback')
    .post(VerifyToken,createFeedback)
    .get(getAllFeedback)

router.route('/feedback/:id')
    .patch(VerifyToken,updateFeedback)
    .get(getByIdFeedback)
    .delete(VerifyToken, deleteFeedback)

export default router;