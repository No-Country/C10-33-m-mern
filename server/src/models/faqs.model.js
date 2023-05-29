import { Schema, model } from "mongoose";

const faqsSchema= new Schema({
    title: {
        type: String
    },
    message: {
        type: String
    }
})


export const faqsModel = model('Faqs', faqsSchema)
