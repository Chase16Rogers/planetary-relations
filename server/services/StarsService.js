import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Stars.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("ERROR 404 STAR DOES NOT EXIST")
    }
    return findOne
  }
  async create(req) {
    return await dbContext.Stars.create(req.body)
  }
  async edit(req) {
    let editStar = await dbContext.Stars.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!editStar) {
      throw new BadRequest("ERROR 404 STAR DOES NOT EXIST AND CANNOT BE EDITED")
    }
    return editStar
  }
  async delete(req) {
    let deleteStar = await dbContext.Stars.findByIdAndDelete(req.params.id, req.body)
    if (!deleteStar) {
      throw new BadRequest("ERROR 404 STAR DOES NOT EXIST AND CANNOT BE DELETED")
    }
    return "Successfully Deleted"
  }
}
export const starsService = new StarsService()
