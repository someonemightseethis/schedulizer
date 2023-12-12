import Appointment from "../models/appointment.js";
import Business from "../models/business.js";

// Add Appointments
export async function addAppointments(req, res) {
	const appointmentData = {
		business_id: req.body.business_id,
		name: req.body.appointmentTitle,
		durration: req.body.appointmentDuration,
		startTime: req.body.appointmentStartTime,
		endTime: req.body.appointmentEndTime,
		days: req.body.selectedDays,
		price: req.body.appointmentPrice,
		description: req.body.appointmentDescription,
	};

	try {
		const createdAppointment = await Appointment.create(appointmentData);

		await Business.findByIdAndUpdate(req.body.business_id, {
			$push: { appointments: createdAppointment._id },
		});

		return res.status(200).send({
			success: true,
			message: "Appointment added successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
}

export async function getAll(req, res) {
	try {
		const appointments = await Appointment.find();
		return res.status(200).send({
			success: true,
			message: "Appointments data fetched successfully",
			data: appointments,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
}

export async function getById(req, res) {
	const Id = req.params.id;

	try {
		const appointment = await Appointment.findById(Id);

		if (!appointment) {
			return res.status(404).send("Appointment not found");
		}

		return res.status(200).send({
			success: true,
			message: "Appointment fetched successfully",
			data: appointment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

export async function updateById(req, res) {
	const Id = req.params.id;

	try {
		const existingAppointment = await Appointment.findById(Id);

		if (!existingAppointment) {
			return res.status(404).send("Appointment not found");
		}

		existingAppointment.name = req.body.name || existingAppointment.name;
		existingAppointment.durration =
			req.body.durration || existingAppointment.durration;
		existingAppointment.startTime =
			req.body.startTime || existingAppointment.startTime;
		existingAppointment.endTime =
			req.body.endTime || existingAppointment.endTime;
		existingAppointment.days = req.body.days || existingAppointment.days;
		existingAppointment.price = req.body.price || existingAppointment.price;

		const updatedAppointment = await existingAppointment.save();

		return res.status(200).send({
			success: true,
			message: "Appointment updated successfully",
			data: updatedAppointment,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

export async function deleteById(req, res) {
	const Id = req.params.id;

	try {
		const existingAppointment = await Appointment.findById(Id);

		if (!existingAppointment) {
			return res.status(404).send("Appointment not found");
		}

		await Appointment.deleteOne({ _id: Id });

		return res
			.status(200)
			.json({ message: "Appointment deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}
