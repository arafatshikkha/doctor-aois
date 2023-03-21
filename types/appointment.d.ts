import {Document} from "mongoose";


export interface Appointment {
    doctor: string;
    name: string;
    phone: string;
    email: string;
    dob:string;
    date: string;
    slot: string;
  }