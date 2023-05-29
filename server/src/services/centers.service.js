import { centersModel } from '../models/centers.model.js'


export const getAllSites = async (req, res) => {
    try {
        const sites = await centersModel.find()
        return res.json(sites)
    } catch (error) {
        return error
    }

}


export const createSite = async (req, res) => {
    const { name, address, city, coordinates, openingTimes } = req.body
    const newSite = await centersModel.create({
        name,
        address,
        coordinates,
        city,
        openingTimes
    })

    // return res.json('Sitio creado con exito', newSite)
}