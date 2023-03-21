import express, { Express, Router } from "express";
import { createUser, deleteUser, getAllUser, getByIdUser, getMe, longinUser, updateUser } from "../controller/user.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/user/signin')
    .post(createUser)
    .get(VerifyToken,getAllUser)
    .patch(VerifyToken,updateUser)

router.route('/user/signin/:id')
    .get(getByIdUser)
    .delete(deleteUser)

router.route('/user/login')
    .post(longinUser)

router.route('/user/me')
    .get(VerifyToken,getMe)

export default router;