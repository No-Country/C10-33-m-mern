import { Schema, model } from "mongoose";

const scoresSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  currentPoints: {
    type: Number,
    // required: true,
  },
  currentBottles: {
    type: Number,
  },
  currentWeight: {
    type: Number,
  },
});

scoresSchema.path("currentPoints").set(function (currentPoints) {
  //currentPoints = this.currentPoints * this.currentWeight;
  console.log(currentPoints, this.currentPoints, this.currentWeight);
  return currentPoints;

  //con esta funcion seteadora nos evitamos tener que hacer ese cálculo en cada request en los endpoints
  //en el esquema  debo acceder a los datos del request
});

export const scoresModel = model("Scores", scoresSchema);
