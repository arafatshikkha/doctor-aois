import {promisify} from "util"
import jwt from "jsonwebtoken"

export const VerifyToken = async(req:any ,res:any,next:any)=>{
    try {
        const token = req.headers.authorization;

        if(!token){
            res.status(401).json({
                status: 'failed',
                message: 'User not logged in !'
            }) 
        }
    
        const decoded:any = await promisify<any>(jwt.verify)(token, process.env.TOKEN_SECRET)
        req.user = decoded;

        next()

    } catch (error:any) {
        res.status(403).json({
            status: 'failed',
            data: error.message
        })
    }
}