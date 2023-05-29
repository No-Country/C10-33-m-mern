import { Schema, model } from "mongoose";

const bottlesSchema = new Schema({
  pointsByBottle: {
    type: Number,
    default: 5,
  },
  weightOfBottle: {
    type: Number,
    default: 9,
  },
});

export const bottlesModel = model("Bottles", bottlesSchema);
