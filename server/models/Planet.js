import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema;

const Planet = new Schema({
  name: { type: String, required: true },
  galaxy: { type: ObjectId, ref: "Galaxy", required: true },
  star: { type: ObjectId, ref: "Star", required: true }
})

export default Planet