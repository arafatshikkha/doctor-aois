import {Document} from "mongoose";

export interface Settings {
    logoUrl: string;
    favIcon?: string;
    address: string;
    phone: string;
    email: string;
    descrtion: string;
    metaTag?: string;
    metaDescription?: string;
}