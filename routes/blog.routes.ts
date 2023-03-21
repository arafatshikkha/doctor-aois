import express, { Express, Router } from "express";
import { createBlog, deleteBlog, getAllBlog, getByIdBlog, updateBlog } from "../controller/blog.controller";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/blog')
    .post(createBlog)
    .get(getAllBlog)

router.route('/blog/:id')
    .patch(VerifyToken,updateBlog)
    .get(getByIdBlog)
    .delete(VerifyToken, deleteBlog)

export default router;