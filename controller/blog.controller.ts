import { Blogs } from "../model/Blog"


export const createBlog= async(req: any, res:any)=>{
    console.log(req.body)
    try {
        const blog = new Blogs(req.body)
        
        const result = await blog.save()
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

export const getAllBlog = async(req: any, res:any)=>{
    try {
        const blog = await Blogs.find({})
        res.status(200).json({
            status: 'Success',
            data: blog
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}


export const getByIdBlog = async(req: any, res:any)=>{
    try {
        const blog = await Blogs.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: blog
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const deleteBlog = async(req: any, res:any)=>{
    try {
        const blog = await Blogs.find(req.params.id)

        if(!blog){
            res.status(200).json({
                status: 'Failed',
                msg:'This service not exsit'
            })
        }
        const result = Blogs.deleteOne(blog)

        res.status(200).json({
            status: 'Success'
        })

    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const updateBlog = async(req: any, res:any)=>{
    try {
        const blog:any = await Blogs.find(req.params.id)

        if(!blog){
            res.status(200).json({
                status: 'Failed',
                msg: 'Service not found!'
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