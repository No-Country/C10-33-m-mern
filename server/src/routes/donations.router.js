import { Router } from "express";
import { getAllDonations, makeDonation } from "../services/donations.service.js";

const router = Router()

router.get('/', getAllDonations)
router.post('/makeDonation', makeDonation)
 





export default router;