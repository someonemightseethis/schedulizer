// import express from "express";
import User, { create } from "../models/user.js";
import { hash, compare } from "bcrypt";
import sign from "jsonwebtoken";

// Register User
async function SignUp(req, res) {
	const data = {
		firstName: req.body.userFirstName,
		lastName: req.body.userLastName,
		phoneNumber: req.body.userPhoneNumber,
		email: req.body.userEmail,
		password: req.body.userPassword,
	};

	if (
		!data.firstName ||
		!data.lastName ||
		!data.phoneNumber ||
		!data.email ||
		!data.password
	) {
		return res.status(400).json({ error: "All Fields are required." });
	}

	try {
		const existingUser = await User.findOne({ email: data.email });
		if (existingUser) {
			return res.status(400).json({
				error: "User already exists. Please choose a different Email.",
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

// Login user
async function Login(req, res) {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (!existingUser) {
			return res.send("User name cannot found");
		}
		// Compare the hashed password from the database with the plaintext password
		const isPasswordMatch = await compare(
			req.body.password,
			existingUser.password
		);
		if (!isPasswordMatch) {
			return res.send("wrong Password");
		}
		const token = sign({ id: existingUser.id }, process.env.JWT_SECRET, {
			expiresIn: "1d",
		});
		res
			.status(200)
			.send({ message: "Login Successfuly", success: true, token });
	} catch {
		return res.send("wrong Details");
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
					email: user.email,
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
	Login,
	auth,
};
