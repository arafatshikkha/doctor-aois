import {Document} from "mongoose";
import { Appointment } from "./appointment";
import { Slot } from "./slot";


export interface User {
    fullName: string;
    email: string;
    phone: string;
    dob: string;
    slot?:Slot;
    appointment?:Appointment;
    roleOfUser: string;
    address: string;
    password: string;
  }