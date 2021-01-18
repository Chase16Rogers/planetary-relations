import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema;

const Species = new Schema({
  name: { type: String, required: true },
  galaxy: { type: ObjectId, ref: "Galaxy", required: true },
  star: { type: ObjectId, ref: "Star", required: true },
  planet: { type: ObjectId, ref: "Planet", required: true },
  moon: { type: ObjectId, ref: "Moon", required: true }
})

export default Species