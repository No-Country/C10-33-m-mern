import { faqsModel } from "../models/faqs.model.js";

export const getAllFaqs = async(req,res)=>{
    try {
        const faqs = await faqsModel.find()
        res.json(faqs)        
    } catch (error) {
        return error
    }
}