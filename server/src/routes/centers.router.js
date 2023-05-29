import { Router } from "express";
import { getAllSites, createSite } from "../services/centers.service.js";

const router = Router()

router.get('/', getAllSites)
router.post('/createSite', createSite)



export default router
