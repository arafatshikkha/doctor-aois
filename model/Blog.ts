import mongoose from 'mongoose';
import { Blog } from '../types/blog';


export const Blogs = mongoose.model<Blog>('Blog', new mongoose.Schema<Blog>({
    blogName: {
        type: String,
        required: true
    },
    blogDetails: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    meta: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
}))