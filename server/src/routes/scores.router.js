import express from "express";
import { getUserScores, updateUserScores } from "../services/scores.service.js";

const router = express.Router();

router.get("/:userId/userScores", getUserScores);
router.post("/:userId/updateScores", updateUserScores);

export default router;
