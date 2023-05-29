import { newsModel } from "../models/news.model.js";

export const getNews = async (req, res) => {
    try {
        const news = await newsModel.find()
        if (news) {
            res.json(news)
        } else {
            res.json({ message: 'No existen noticias' })
        }
    } catch (error) {
        return error
    }
}