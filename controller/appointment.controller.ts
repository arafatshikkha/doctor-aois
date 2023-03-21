import { Appointments } from "../model/Appointment"



export const createAppointment= async(req: any, res:any)=>{
    try {
        const appointment = new Appointments(req.body)
        
        const result = await appointment.save()
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

export const getAllAppointment = async(req: any, res:any)=>{
    try {
        const appointment = await Appointments.find({}).populate('doctor')
        res.status(200).json({
            status: 'Success',
            data: appointment
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const getByIdAppointment = async(req: any, res:any)=>{
    try {
        const appointment = await Appointments.find(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: appointment
        })
    } catch (error:any) {
        res.status(200).json({
            status: 'Failed',
            msg: error.message
        })
    }
}

export const deleteAppointment = async(req: any, res:any)=>{
    try {
        const appointment = await Appointments.find(req.params.id)

        if(!appointment){
            res.status(200).json({
                status: 'Failed',
                msg:'This appointment not exsit'
            })
        }
        const result = Appointments.deleteOne(appointment)

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