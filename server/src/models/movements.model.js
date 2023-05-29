import { Schema, model } from "mongoose";

const movementsSchema= new Schema({
    name: {
        type: String,
    },
    movementType: {
        type: String,
    },
    currentPoints:{
        type: Number
    },
    movementDate:{
        type: Date
    }
})


export const movementsModel = model('Movements', movementsSchema)



