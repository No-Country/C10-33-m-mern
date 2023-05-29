import { Schema, model } from 'mongoose'

const benefitsSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    levelId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Levels',
        }
    ]
})


export const benefitsModel = model('Benefits', benefitsSchema)




