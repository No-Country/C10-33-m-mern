import { donationsModel } from "../models/donations.model.js";

export const getAllDonations = async (req, res) => {
    try {
        const donations = await donationsModel.find()
        if (donations) {
            res.json(donations)
        } else {
            res.json({ message: 'No existen donaciones' })
        }
    } catch (error) {
        return error
    }
}

export const makeDonation = async (req, res) => {
    const { name, currentPoints } = req.body

    try {
        const newDonation = await donationsModel.create({
            name,
            currentPoints
        })
    } catch (error) {
        return error
    }

}



