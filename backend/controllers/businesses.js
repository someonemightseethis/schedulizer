import Business from "../models/businesses.js";
import multer from "multer";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

// Register Business
export const registeredBusiness = async (req, res) => {
	console.log(req.body); // This will log the request body

	const data = {
		businessName: req.body.businessName,
		businessContactNumber: req.body.businessContactNumber,
		businessEmail: req.body.businessEmail,
		businessCity: req.body.businessCity,
		businessType: req.body.businessType,
		businessEmployees: req.body.numberOfEmployees,
		businessWorkField: req.body.businessCategory,
		businessAddress: req.body.businessAddress,
		businessAddressLink: req.body.businessAddressLink,
		userEmail: req.body.userEmail,
		businessBio: req.body.businessBio,
	};

	if (
		!data.businessName ||
		!data.businessContactNumber ||
		!data.businessEmail ||
		!data.businessCity ||
		!data.businessType ||
		!data.businessEmployees ||
		!data.businessWorkField ||
		!data.businessAddress ||
		!data.businessAddressLink ||
		!data.userEmail
	) {
		return res.status(400).send("All Fields are required.");
	}

	try {
		const existingUser = await Business.findOne({
			businessEmail: data.businessEmail,
		});

		if (existingUser) {
			return res.status(400).send({
				error:
					"businessEmail already exists. Please choose a different businessEmail.",
			});
		} else {
			const businessdata = await Business.create(data);
			if (!req.body.businessEmail || !req.body.businessName) {
				return res
					.status(400)
					.send("businessEmail and businessName are required.");
			}

			sendMail(req.body.businessEmail, req.body.businessName, "hello");
			console.log(businessdata);
			return res.send({
				message: "Business Registered Successfully",
				success: true,
			});
		}
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
};

export const getAll = async (req, res) => {
	try {
		const businesses = await Business.find();
		return res.send(businesses);
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
};

export const getById = async (req, res) => {
	const Id = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(Id)) {
		return res.status(400).send("Invalid ID");
	}

	try {
		const business = await Business.findById(Id);

		if (!business) {
			return res.status(404).send("Business not found");
		}

		return res.send(business);
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
};

export const updateById = async (req, res) => {
	const Id = req.params.id;

	try {
		const existingBusiness = await Business.findById(Id);

		if (!existingBusiness) {
			return res.status(404).send("Business not found");
		}

		existingBusiness.businessName =
			req.body.businessName || existingBusiness.businessName;
		existingBusiness.businessContactNumber =
			req.body.businessContactNumber || existingBusiness.businessContactNumber;
		existingBusiness.businessEmail =
			req.body.businessEmail || existingBusiness.businessEmail;
		existingBusiness.businessCity =
			req.body.businessCity || existingBusiness.businessCity;
		existingBusiness.businessType =
			req.body.businessType || existingBusiness.businessType;
		existingBusiness.businessEmployees =
			req.body.businessEmployees || existingBusiness.businessEmployees;
		existingBusiness.businessWorkField =
			req.body.businessWorkField || existingBusiness.businessWorkField;
		existingBusiness.businessAddressLink =
			req.body.businessAddressLink || existingBusiness.businessAddressLink;
		existingBusiness.googleMapLink =
			req.body.googleMapLink || existingBusiness.googleMapLink;
		existingBusiness.businessBio =
			req.body.businessBio || existingBusiness.businessBio;

		const updatedBusiness = await existingBusiness.save();

		return res.send(updatedBusiness);
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
};

export const deleteById = async (req, res) => {
	const Id = req.params.id;

	try {
		const existingBusiness = await Business.findById(Id);

		if (!existingBusiness) {
			return res.status(404).send("Business not found");
		}

		await Business.deleteOne({ _id: Id });

		return res.send({ message: "Business deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/profile");
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + file.originalname);
	},
});

export const upload = multer({ storage: storage });

export const uploadPic = async (req, res) => {
	const Id = req.params.id;

	try {
		const file = req.file;
		const imgUrl = file.path;

		await Business.findByIdAndUpdate(Id, {
			businessProfile: imgUrl,
		});

		res.send("Profile Uploaded");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};
// 	const transporter = nodemailer.createTransport({
// 		port: 465,
// 		service: "gmail",
// 		auth: {
// 			user: "fisakhan0347@gmail.com",
// 			pass: "mnqi jalg hxqf wkix",
// 		},
// 		secure: true,
// 	});

// 	const mailData = {
// 		from: "fisakhan0347@gmail.com",
// 		to: to,
// 		subject: subject,
// 		text: text,
// 		html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
// 	};

// 	try {
// 		const info = await transporter.sendMail(mailData);
// 		res.status(200).send({ message: "Mail sent", message_id: info.messageId });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send("Internal Server Error");
// 	}
// };

export const sendMail = async (to, subject, text) => {
	const transporter = nodemailer.createTransport({
		port: 465,
		service: "gmail",
		auth: {
			user: "fisakhan0347@gmail.com",
			pass: "mnqi jalg hxqf wkix",
		},
		secure: true, // upgrades later with STARTTLS -- change this based on the PORT
	});
	const mailData = {
		from: "fisakhan0347@gmail.com",
		to: to,
		subject: subject,
		text: text,
		html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
	};
	console.log(mailData);
	return await transporter.sendMail(mailData, (error, info) => {
		if (error) {
			return console.log(error);
		}
		status(200).send({ message: "Mail send", message_id: info.messageId });
	});
};
