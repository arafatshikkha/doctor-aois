import { Feedbacks } from "../model/Feedback";



export const createFeedback = async(req:any,res:any) => {
    try {
        const body = req.body;
        const feedback = new Feedbacks(body)

        const result = await feedback.save()
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

export const getAllFeedback = async(req: any, res:any)=>{
    try {
        const feedback = await Feedbacks.find({})
        res.status(200).json({
            status: 'Success',
            data: feedback
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const getByIdFeedback = async(req: any, res:any)=>{
    try {
        const feedback = await Feedbacks.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: feedback
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const deleteFeedback = async(req: any, res:any)=>{
    try {
        const feedback = await Feedbacks.find(req.params.id)

        if(!feedback){
            res.status(200).json({
                status: 'Failed',
                msg:'This service not exsit'
            })
        }
        const result = Feedbacks.deleteOne(feedback)

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

export const updateFeedback = async(req: any, res:any)=>{
    try {
        const feedback:any = await Feedbacks.find(req.params.id)

        if(!feedback){
            res.status(200).json({
                status: 'Failed',
                msg: 'Service not found!'
            })
        }

        const result = feedback.updateOne({_id:feedback._id},{$set:req.body})

        
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