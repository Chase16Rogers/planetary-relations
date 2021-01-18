import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema;

const Moon = new Schema({
  name: { type: String, required: true },
  star: { type: ObjectId, ref: "Star", required: true },
  galaxy: { type: ObjectId, ref: "Galaxy", required: true },
  planet: { type: ObjectId, ref: "Planet", required: true }
})

export default Moon