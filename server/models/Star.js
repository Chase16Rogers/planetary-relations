import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema;

const Star = new Schema({
  name: { type: String, required: true },
  brightness: { type: String, default: "yellow" },
  galaxy: { type: ObjectId, ref: "Galaxy", required: true }
})

export default Star