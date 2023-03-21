import { Service } from "../model/Service"



export const createService= async(req: any, res:any)=>{
    try {
        const service = new Service(req.body)
        
        const result = await service.save()
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

export const getAllService = async(req: any, res:any)=>{
    try {
        const service = await Service.find({})
        res.status(200).json({
            status: 'Success',
            data: service
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const getByIdService = async(req: any, res:any)=>{
    try {
        const service = await Service.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: service
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const deleteService = async(req: any, res:any)=>{
    try {
        const service = await Service.find(req.params.id)

        if(!service){
            res.status(200).json({
                status: 'Failed',
                msg:'This service not exsit'
            })
        }
        const result = Service.deleteOne(service)

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

export const updateService = async(req: any, res:any)=>{
    try {
        const service:any = await Service.find(req.params.id)

        if(!service){
            res.status(200).json({
                status: 'Failed',
                msg: 'Service not found!'
            })
        }

        const result = Service.updateOne({_id:service._id},{$set:req.body})

        
        res.status(200).json({
            status: 'Success',
            data: service
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

