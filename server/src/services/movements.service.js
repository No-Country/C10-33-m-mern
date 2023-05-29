import { movementsModel } from "../models/movements.model.js";


export const getAllMovements = async (req, res) => {
    try {
        const movements = await movementsModel.find()
        if (movements) {
            return res.json(movements)
        } else {
            return res.json({ message: 'No existen movimientos' })
        }
    } catch (error) {
        return error
    }
}

export const createMovement = async (req, res) => {
    try {
        const { name, currentPoints, movementType, movementDate } = req.body
        const newMovement = await movementsModel.create({
            name,
            currentPoints,
            movementDate,
            movementType
        })
        return res.json(newMovement)

    } catch (error) {
        return error
    }
}