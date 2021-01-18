import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { starsService } from "./StarsService";

class GalaxiesService {

  async getAll(query = {}) {
    return await dbContext.Galaxies.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Galaxies.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("ERROR 404 GALAXY DOES NOT EXIST")
    }
    return findOne
  }
  async getStar(req) {
    let data = await starsService.getAll({ galaxy: req.params.id })
    if (!data) {
      throw new BadRequest("THERE ARE NO STARS IN THIS GALAXY")
    }
    return data
  }
  async create(req) {
    return await dbContext.Galaxies.create(req.body)
  }
  async edit(req) {
    let editGalaxy = await dbContext.Galaxies.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!editGalaxy) {
      throw new BadRequest("ERROR 404 GALAXY DOES NOT EXIST AND CANNOT BE EDITED")
    }
    return editGalaxy
  }
  async delete(req) {
    let deleteGalaxy = await dbContext.Galaxies.findByIdAndDelete(req.params.id, req.body)
    if (!deleteGalaxy) {
      throw new BadRequest("ERROR 404 GALAXY DOES NOT EXIST AND CANNOT BE DELETED")
    }
    return "Successfully Deleted"
  }
}
export const galaxiesService = new GalaxiesService()
