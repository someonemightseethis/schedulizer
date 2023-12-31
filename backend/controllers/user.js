// import express from "express";
import User, { create } from "../models/user.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

// Register User
async function SignUp(req, res) {
	console.log("req.body", req.body);

	const data = {
		firstName: req.body.userFirstName,
		lastName: req.body.userLastName,
		userContactNumber: req.body.userContactNumber,
		userEmail: req.body.userEmail,
		password: req.body.userPassword,
	};

	if (
		!data.firstName ||
		!data.lastName ||
		!data.userContactNumber ||
		!data.userEmail ||
		!data.password
	) {
		return res.status(400).json({ error: "All Fields are required." });
	}

	try {
		const existingUser = await User.findOne({ userEmail: data.userEmail });
		if (existingUser) {
			return res.status(400).json({
				error: "User already exists. Please choose a different userEmail.",
			});
		}

		const saltRounds = 10;
		const hashedPassword = await hash(data.password, saltRounds);
		data.password = hashedPassword;

		const userData = await create(data);
		console.log(userData);
		return res
			.status(200)
			.send({ message: "User Registered Successfully", success: true });
	} catch (error) {
		console.error("Error during signup:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
}

// SignIn user
async function SignIn(req, res) {
	try {
		const existingUser = await User.findOne({ userEmail: req.body.userEmail });
		if (!existingUser) {
			return res.status(400).json({
				error:
					"No user found with the given email. Please make sure you have entered the correct email.",
			});
		}

		// Compare the hashed password from the database with the plaintext password
		const isPasswordMatch = await compare(
			req.body.userPassword,
			existingUser.password
		);
		if (!isPasswordMatch) {
			return res
				.status(400)
				.json({
					error:
						"Please make sure you have entered the correct password for the provided email.",
				});
		}

		console.log("Existing User:", existingUser);

		const token = jwt.sign(
			{
				id: existingUser.id,
				firstName: existingUser.firstName,
				userEmail: existingUser.userEmail,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "10h",
			}
		);

		console.log("Generated Token:", token);

		res
			.status(200)
			.json({ message: "Sign In Successful", success: true, token });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: "Internal Server Error", details: error.stack });
	}
}

const auth = async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.body.userId });
		if (!user) {
			return res.status(200).send({
				message: "user not found",
				success: false,
			});
		} else {
			res.status(200).send({
				success: true,
				data: {
					name: user.name,
					userEmail: user.userEmail,
				},
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({
			message: "auth error",
			success: false,
			error,
		});
	}
};

export default {
	SignUp,
	SignIn,
	auth,
};
