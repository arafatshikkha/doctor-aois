import {Document} from "mongoose";


export interface Blog {
    blogName: string;
    blogDetails: string;
    imgUrl: string;
    meta: string;
    metaDescription: string;
    
  }