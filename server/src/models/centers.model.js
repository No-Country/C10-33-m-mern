import { Schema, model } from 'mongoose'

const centersSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    city:{
        type: String,
    },
    coordinates: {
        type: Array
    },
    openingTimes:{
        type: String
    }
})


export const centersModel = model('Centers', centersSchema)


