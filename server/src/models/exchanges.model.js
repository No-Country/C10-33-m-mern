import { Schema, model } from 'mongoose'

const exchangesSchema= new Schema({
    growth:{
        type: String,
    },
    currentPoints:{
        
    }


})


export const exchangesModel = model('Exchanges',exchangesSchema)