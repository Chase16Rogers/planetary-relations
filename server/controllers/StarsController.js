import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController {
  constructor() {
    super("api/stars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await starsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await starsService.getOne(req))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await starsService.create(req))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await starsService.edit(req))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await starsService.delete(req))
    } catch (error) {
      next(error)
    }
  }
}