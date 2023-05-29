import { Schema, model } from 'mongoose'

const donationsSchema= new Schema({
    name:{
        type: String,
    },
    currentPoints:{
        type: Number,
    }


})


export const donationsModel = model('Donations',donationsSchema)