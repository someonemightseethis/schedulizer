import mongoose from "mongoose";

// Create Schema
const Appointmentschema = new mongoose.Schema({
	business_id: [{ type: mongoose.Types.ObjectId, ref: "Business" }],
	name: {
		type: String,
		required: true,
	},
	durration: {
		type: Number,
		required: true,
	},
	timing: {
		type: Number,
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
});

// collection part
const Appointment = mongoose.model("appointments", Appointmentschema);

export default Appointment;
