import {Document} from "mongoose";

export interface Feedback {
    name: string;
    rating: number;
    details: string;
}