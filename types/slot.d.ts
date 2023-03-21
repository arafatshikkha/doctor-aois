import {Document} from "mongoose";

export interface Slot {
    date: Date;
    startTime: string;
    endTime: string;
    slotNumber?: Number;
    createdAt?: any;
    booked: boolean;
}