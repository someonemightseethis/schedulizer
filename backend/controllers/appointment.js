import Appointment from "../models/appointment.js";
import Business from "../models/business.js";

// Add Appointments
export async function addAppointments(req, res) {
	const appointmentData = {
		business_id: req.body.business_id,
		name: req.body.name,
		durration: req.body.durration,
		timing: req.body.timing,
		days: req.body.days,
		price: req.body.price,
	};

	try {
		const createdAppointment = await Appointment.create(appointmentData);

		await Business.findByIdAndUpdate(req.body.business_id, {
			$push: { appointments: createdAppointment._id },
		});

		return res.send("Appointment added successfully");
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
}

export async function getAll(req, res) {
	try {
		const appointments = await Appointment.find();
		return res.json(appointments);
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
}

export async function getById(req, res) {
	const id = req.params.id;

	try {
		const appointment = await Appointment.findById(id);

		if (!appointment) {
			return res.status(404).send("Appointment not found");
		}

		return res.send(appointment);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

export async function updateById(req, res) {
	const id = req.params.id;

	try {
		const existingAppointment = await Appointment.findById(id);

		if (!existingAppointment) {
			return res.status(404).send("Appointment not found");
		}

		existingAppointment.name = req.body.name || existingAppointment.name;
		existingAppointment.durration =
			req.body.durration || existingAppointment.durration;
		existingAppointment.timing = req.body.timing || existingAppointment.timing;
		existingAppointment.days = req.body.days || existingAppointment.days;
		existingAppointment.price = req.body.price || existingAppointment.price;

		const updatedAppointment = await existingAppointment.save();

		return res.json(updatedAppointment);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

export async function deleteById(req, res) {
	const id = req.params.id;

	try {
		const existingAppointment = await Appointment.findById(id);

		if (!existingAppointment) {
			return res.status(404).send("Appointment not found");
		}

		await Appointment.deleteOne({ _id: id });

		return res.json({ message: "Appointment deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}
