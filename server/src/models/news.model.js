import { Schema, model } from "mongoose";

const newsSchema= new Schema({
    url: {
        type: String
    }
})


export const newsModel = model('News', newsSchema)


