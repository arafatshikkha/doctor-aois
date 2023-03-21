import { Slots } from "../model/Slot"


export const createSlot= async(req: any, res:any)=>{
    try {
        const slot = new Slots(req.body)
        
        const result = await slot.save()
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

export const getAllSlot = async(req: any, res:any)=>{
    try {
        const slot = await Slots.find({})
        res.status(200).json({
            status: 'Success',
            data: slot
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const getByIdSlot = async(req: any, res:any)=>{
    try {
        const slot = await Slots.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: slot
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const deleteSlot = async(req: any, res:any)=>{
    try {
        const slot = await Slots.find(req.params.id)

        if(!slot){
            res.status(200).json({
                status: 'Failed',
                msg:'This service not exsit'
            })
        }
        const result = Slots.deleteOne(slot)

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

export const updateSlot = async(req: any, res:any)=>{
    try {
        const slot:any = await Slots.find(req.params.id)

        if(!slot){
            res.status(200).json({
                status: 'Failed',
                msg: 'Service not found!'
            })
        }

        const result = Slots.updateOne({_id:slot._id},{$set:req.body})

        
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
