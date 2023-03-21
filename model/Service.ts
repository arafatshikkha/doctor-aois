import mongoose from 'mongoose';
import { Services } from '../types/services';

export const Service = mongoose.model<Services>('Service', new mongoose.Schema<Services>({
    serviceName: {
        type: String,
        required: true
    },
    servicesDetails: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    doctorUrl: {
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