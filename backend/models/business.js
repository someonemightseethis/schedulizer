import mongoose from "mongoose";
// import Appointment from "./appointment";

const BusinessSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	employees: {
		type: Number,
		required: true,
	},
	workField: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	googleMapLink: {
		type: String,
		required: true,
	},
	profile: {
		type: String,
	},
	appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

// Collection part
const Business = mongoose.model("businesses", BusinessSchema);

export default Business;
