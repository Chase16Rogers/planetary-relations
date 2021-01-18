import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async getAll(query = {}) {
    return await dbContext.Moons.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Moons.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("ERROR 404 MOON DOES NOT EXIST")
    }
    return findOne
  }
  async create(req) {
    return await dbContext.Moons.create(req.body)
  }
  async edit(req) {
    let editMoon = await dbContext.Moons.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!editMoon) {
      throw new BadRequest("ERROR 404 MOON DOES NOT EXIST AND CANNOT BE EDITED")
    }
    return editMoon
  }
  async delete(req) {
    let deleteMoon = await dbContext.Moons.findByIdAndDelete(req.params.id, req.body)
    if (!deleteMoon) {
      throw new BadRequest("ERROR 404 MOON DOES NOT EXIST AND CANNOT BE DELETED")
    }
    return "Successfully Deleted"
  }
}
export const moonsService = new MoonsService()
