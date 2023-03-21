import { Settings } from '../types/settings.d'
import mongoose from 'mongoose';


export const Setting = mongoose.model<Settings>('Setting', new mongoose.Schema<Settings>({
    logoUrl: {
        Data: String,
        required: true
    },
    favIcon:{
        type: String
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    descrtion: {
        type: String,
        required: true
    },
    metaTag: {
        type: String,
        required: false
    },
    metaDescription: {
        type: String,
        required: false
    },
}))