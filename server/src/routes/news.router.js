import { Router } from "express";
import { getNews } from "../services/news.service.js";

const router = Router()

router.get('/', getNews)


export default router