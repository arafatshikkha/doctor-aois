import {Document} from "mongoose";

export interface About {
    name: string;
    description: string;
    metaTag: string;
    metaDescription: string;
}