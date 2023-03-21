
import bcrypt from 'bcryptjs';
import { error } from 'console';
import { Users } from '../model/User';
import { generateToken } from '../utils/token'


export const createUser= async(req: any, res:any)=>{
    try {
        const exsit:any = await Users.findOne({email: req.body.email})

        if(exsit){
            res.status(400).json({
                message: 'User already exists'
            })
        }
        const user = new Users(req.body)
        
        const result = await user.save()
        res.status(201).json({
            status: 'Success',
            data: result
        })
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}

export const getAllUser=async(req: any, res:any)=>{
    try {
        const result = await Users.find({})
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}

export const updateUser= async(req: any, res:any)=>{
    const body = req.body;
    try {
        const user:any = await Users.findOne({_id:body.id})

        if(!user){
            res.status(400).json({
                status: 'failed',
                data: error
            })
        }

        const result = await Users.updateOne({_id:user._id},{$set:body})


        if(result.modifiedCount === 1){
            res.status(200).json({
                status: 'success'
            })
        }
        
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}

export const deleteUser= async(req:any,res:any)=>{
    const id = req.params.id;
    try {

        const user = await Users.findOne({_id:id})
        console.log(user)

        const result = await Users.findOneAndDelete({_id:id})


            res.status(204).json({
                status: 'success'
            })
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
        console.log(error.message)
    }
}

export const getByIdUser= async (req:any,res:any)=>{
    try {
        const id = req.params.id;
        const user = await Users.findOne({_id:id});

        res.status(200).json({
            status: 'success',
            data: user
        })

    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}

export const longinUser= async(req:any, res:any)=>{

    const { email , password } = req.body;
    try {
        if(!email || !password){
            res.status(401).json({
                status: 'Failed',
                message: 'Provided email or password is incorrect' 
            })
        }
        const user:any = await Users.findOne({email})
        if(!user){
            res.status(404).json({
                status: 'Failed',
                message: 'User does not exist'
            })

        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if(!isValidPassword){
            res.status(403).json({
                status: 'Failed',
                message: 'Invalid password !'
            })
        }

        const token = generateToken(user)

        res.status(200).json({
            status: 'Success',
                user,
                token
        })
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}

export const getMe = async(req:any,res:any)=>{
    try {
        const body = req.user?.email
        const user = await Users.findOne({body}).populate(['slot','appointment'])
        res.status(200).json({
            data: user
        })
    } catch (error) {
        console.log(error)
    }
}

