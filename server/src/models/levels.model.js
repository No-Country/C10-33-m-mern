import { Schema, model } from 'mongoose'

const levelsSchema = new Schema({
    status:{
        type: String,
        required: true
    },
    minScore:{
        type: Number
    }
})


export const levelsModel = model('Levels', levelsSchema)