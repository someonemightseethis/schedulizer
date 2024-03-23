import mongoose from "mongoose";
// import Appointment from "./appointment";

const businessSchema = new mongoose.Schema({
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
		default: "./public/images/logo.png",
	},
	businessBio: {
		type: String,
		required: true,
		default:
			"Welcome to our busness. We hope you have a wonderful experience with us. We sstrive to provide the best service possible.",
	},
	services: [{ type: mongoose.Types.ObjectId, ref: "Service" }],
});

// Collection part
const Business = mongoose.model("businesses", businessSchema);

export default Business;
