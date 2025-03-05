import Flight from "../models/flight.model.js";

const generateFlightPrices = () => {
  return {
    indigo: `₹${Math.floor(Math.random() * 1000) + 1500}`,
    airAsia: `₹${Math.floor(Math.random() * 1000) + 1700}`,
    vistara: `₹${Math.floor(Math.random() * 1000) + 2000}`,
  };
};

export const getFlights = async (req, res) => {
  const { source, destination, date } = req.query;
  if (!source || !destination || !date) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  let flight = await Flight.findOne({ source, destination, date });
  if (!flight) {
    flight = new Flight({ source, destination, date, prices: generateFlightPrices() });
    await flight.save();
  }
  res.json(flight.prices);
};

export const addFlight = async (req, res) => {
  const { source, destination, date } = req.body;
  if (!source || !destination || !date) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  const prices = generateFlightPrices();
  const flight = new Flight({ source, destination, date, prices });
  await flight.save();
  res.status(201).json({ message: "Flight added successfully", prices });
};

export const updateFlight = async (req, res) => {
  const { id } = req.params;
  const { prices } = req.body;
  const flight = await Flight.findByIdAndUpdate(id, { prices }, { new: true });
  if (!flight) {
    return res.status(404).json({ error: "Flight not found" });
  }
  res.json({ message: "Flight updated", flight });
};

export const deleteFlight = async (req, res) => {
  const { id } = req.params;
  const flight = await Flight.findByIdAndDelete(id);
  if (!flight) {
    return res.status(404).json({ error: "Flight not found" });
  }
  res.json({ message: "Flight deleted" });
};