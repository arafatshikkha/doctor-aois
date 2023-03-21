import jwt from 'jsonwebtoken'

export const generateToken = (userInfo:any)=>{
    const payload = {
        fullName: userInfo.fullName,
        email: userInfo.email,
        roleOfUser: userInfo.roleOfUser
    }

    const token = jwt.sign(payload, process.env.TOKEN_SECRET,{
        expiresIn: "30days"
    })

    return token;
}