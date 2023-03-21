import mongoose from 'mongoose';
import { About } from '../types/about';


export const Abouts = mongoose.model<About>('About', new mongoose.Schema<About>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    metaTag: {
        type: String,
        required: true,
    },
    metaDescription: {
        type: String,
        required: true,
    },
}))