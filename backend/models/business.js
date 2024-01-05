import mongoose from "mongoose";
// import Appointment from "./appointment";

const BusinessSchema = new mongoose.Schema({
	businessName: {
		type: String,
		required: true,
	},
	businessContactNumber: {
		type: Number,
		required: true,
	},
	businessEmail: {
		type: String,
		required: true,
	},
	userEmail: {
		type: String,
		required: true,
	},
	businessCity: {
		type: String,
		required: true,
	},
	businessType: {
		type: String,
		required: true,
	},
	businessEmployees: {
		type: String,
		required: true,
	},
	businessWorkField: {
		type: String,
		required: true,
	},
	businessAddress: {
		type: String,
		required: true,
	},
	businessAddressLink: {
		type: String,
		required: true,
	},
	businessProfile: {
		type: String,
	},
	businessAppointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

// Collection part
const Business = mongoose.model("businesses", BusinessSchema);

export default Business;
