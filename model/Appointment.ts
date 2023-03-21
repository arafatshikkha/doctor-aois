import mongoose from 'mongoose';
import { Appointment } from '../types/appointment';


export const Appointments = mongoose.model<Appointment>('appointment', new mongoose.Schema<Appointment>({
    doctor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    name: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    slot: {
        type: String,
        required: true
    }
}))