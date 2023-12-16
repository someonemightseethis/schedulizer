import mongoose from "mongoose";

// Create Schema
const Appointmentschema = new mongoose.Schema({
	business_id: [{ type: mongoose.Types.ObjectId, ref: "Business" }],
	name: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	timing: {
		type: String,
		required: true,
	},
	days: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

// collection part
const Appointment = mongoose.model("appointments", Appointmentschema);

export default Appointment;
