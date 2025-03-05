import { Router } from 'express';

import { getFlights, addFlight, updateFlight, deleteFlight } from "../controllers/flight.controller.js";
const flightRoute = Router();

flightRoute.get("/", getFlights);
flightRoute.post("/", addFlight);
flightRoute.put("/:id", updateFlight);
flightRoute.delete("/:id", deleteFlight);

;

export default flightRoute;