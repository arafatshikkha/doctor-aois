import { Abouts } from "../model/About"


export const createAbout= async(req: any, res:any)=>{
    try {
        const about = new Abouts(req.body)
        
        const result = await about.save()
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

export const getAllAbout = async(req: any, res:any)=>{
    try {
        const about = await Abouts.find({})
        res.status(200).json({
            status: 'Success',
            data: about
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}


export const getByIdAbout = async(req: any, res:any)=>{
    try {
        const about = await Abouts.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: about
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const updateAbout = async(req: any, res:any)=>{
    try {
        const file = req.files;
        const blog:any = await Abouts.findOne(req.params.id)
        

        if(!blog){
            res.status(200).json({
                status: 'Failed',
                msg: 'About not found!'
            })
        }

        const result = blog.updateOne({_id:blog._id},{$set:req.body})

        
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

