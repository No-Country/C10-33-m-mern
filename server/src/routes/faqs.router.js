import { Router } from "express";
import { getAllFaqs } from "../services/faqs.service.js";

const router = Router()


router.get('/', getAllFaqs)



export default router