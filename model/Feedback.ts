import mongoose from 'mongoose';
import { Feedback } from '../types/feedback';


export const Feedbacks = mongoose.model<Feedback>('Feedback', new mongoose.Schema<Feedback>({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    }
}))