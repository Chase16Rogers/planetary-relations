import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Planets.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("ERROR 404 PLANET DOES NOT EXIST")
    }
    return findOne
  }
  async create(req) {
    return await dbContext.Planets.create(req.body)
  }
  async edit(req) {
    let editPlanet = await dbContext.Planets.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!editPlanet) {
      throw new BadRequest("ERROR 404 PLANET DOES NOT EXIST AND CANNOT BE EDITED")
    }
    return editPlanet
  }
  async delete(req) {
    let deletePlanet = await dbContext.Planets.findByIdAndDelete(req.params.id, req.body)
    if (!deletePlanet) {
      throw new BadRequest("ERROR 404 PLANET DOES NOT EXIST AND CANNOT BE DELETED")
    }
    return "Successfully Deleted"
  }
}
export const planetsService = new PlanetsService()
