import mongoose from 'mongoose';
import { Slot} from '../types/slot'


export const Slots = mongoose.model<Slot>('slot', new mongoose.Schema<Slot>({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    slotNumber: {
        type: Number,
        required: false
    },
    booked:{
        type: Boolean,
        required: true
    },
    createdAt: { 
        type: Date, 
        expires: 15778800000
    }
    
}))