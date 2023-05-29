import { Router } from "express";
import { createMovement, getAllMovements } from "../services/movements.service.js";

const router = Router()

router.get('/', getAllMovements)
router.post('/create', createMovement)



export default router