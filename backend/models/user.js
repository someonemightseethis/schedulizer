import mongoose from "mongoose";
// Create Schema
const SignInSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", SignInSchema);

// collection part
async function create(userData) {
	const user = new User(userData);
	return await user.save();
}

export { User as default, create };