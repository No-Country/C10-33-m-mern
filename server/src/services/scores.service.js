import { scoresModel } from "../models/scores.model.js";

/* move to external variables file */
const POINTS_BY_BOTTLE = 5;
const WEIGHT_BY_BOTTLE = 9;

export const getUserScores = async (req, res) => {
  const { userId } = req.params;

  const lastScore = await scoresModel.findOne({ userId });

  if (!lastScore) res.status(404).json({ message: "404" });

  return res.json(lastScore);
};

export const updateUserScores = async (req, res) => {
  const { userId, bottlesQuantity } = req.body;

  const score = await scoresModel.findOne({ userId });

  if (!score) {
    const firstScore = await scoresModel.create({
      userId,
      currentPoints: POINTS_BY_BOTTLE * bottlesQuantity,
      currentBottles: bottlesQuantity,
      currentWeight: WEIGHT_BY_BOTTLE * bottlesQuantity,
    });

    return res.json(firstScore);
  }

  score.currentPoints += POINTS_BY_BOTTLE * bottlesQuantity;
  score.currentBottles += bottlesQuantity;
  score.currentWeight += WEIGHT_BY_BOTTLE * bottlesQuantity;

  await score.save();

  return res.json(score);
};
