import mongoose from "mongoose";

// Create Schema
const ServiceSchema = new mongoose.Schema({
	business_id: [{ type: mongoose.Types.ObjectId, ref: "Business" }],
	serviceName: {
		type: String,
		required: true,
	},
	serviceDuration: {
		type: String,
		required: true,
	},
	serviceTiming: {
		type: String,
		required: true,
	},
	serviceDays: {
		type: String,
		required: true,
	},
	servicePrice: {
		type: Number,
		required: true,
	},
	serviceDescription: {
		type: String,
		required: true,
	},
	businessEmail: {
		type: String,
		required: true,
	},
});

// collection part
const Service = mongoose.model("services", ServiceSchema);

export default Service;
