import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  prices: { type: Object, required: true }
}, { timestamps: true });
const Flight = mongoose.model("Flight", flightSchema);

export default Flight;