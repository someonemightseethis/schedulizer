import express from "express";
import {
	addAppointments,
	getAll,
	getById,
	updateById,
	deleteById,
} from "../controllers/appointment.js";

const appointmentRouter = express.Router();

// Register Business
appointmentRouter.post("/add", addAppointments);
appointmentRouter.get("/all", getAll);
appointmentRouter.get("/:id", getById);
appointmentRouter.put("/:id", updateById);
appointmentRouter.delete("/:id", deleteById);

// Login user
//router.post("/appointments",businessAppointments);

export default appointmentRouter;
