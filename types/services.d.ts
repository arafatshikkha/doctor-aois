import {Document} from "mongoose";

export interface Services {
    serviceName: string;
    servicesDetails: string;
    imgUrl: string;
    doctorUrl: string;
    meta: string;
    metaDescription: string;
  }