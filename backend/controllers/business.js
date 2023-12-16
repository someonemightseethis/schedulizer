import Business from "../models/business.js";
import multer from "multer";
import nodemailer from "nodemailer";

// Register Business
export const registeredBusiness = async (req, res) => {
	console.log(req.body); // This will log the request body

	const data = {
		name: req.body.businessName,
		contactNumber: req.body.businessContactNumber,
		email: req.body.businessEmail,
		city: req.body.businessCity,
		type: req.body.businessType,
		employees: req.body.numberOfEmployees,
		workField: req.body.businessCategory,
		address: req.body.businessAddress,
		addressLink: req.body.businessAddressLink,
	};

	if (
		!data.name ||
		!data.contactNumber ||
		!data.email ||
		!data.city ||
		!data.type ||
		!data.employees ||
		!data.workField ||
		!data.address ||
		!data.addressLink
	) {
		return res.status(400).send("All Fields are required.");
	}

	try {
		const existingUser = await Business.findOne({ email: data.email });

		if (existingUser) {
			return res.status(400).send({
				error: "Email already exists. Please choose a different Email.",
			});
		} else {
			const businessdata = await Business.create(data);
			if (!req.body.businessEmail || !req.body.businessName) {
				return res.status(400).send("Email and name are required.");
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

		existingBusiness.name = req.body.name || existingBusiness.name;
		existingBusiness.contactNumber =
			req.body.contactNumber || existingBusiness.contactNumber;
		existingBusiness.email = req.body.email || existingBusiness.email;
		existingBusiness.city = req.body.city || existingBusiness.city;
		existingBusiness.type = req.body.type || existingBusiness.type;
		existingBusiness.employees =
			req.body.employees || existingBusiness.employees;
		existingBusiness.workField =
			req.body.workField || existingBusiness.workField;
		existingBusiness.addressLink =
			req.body.addressLink || existingBusiness.addressLink;
		existingBusiness.googleMapLink =
			req.body.googleMapLink || existingBusiness.googleMapLink;

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
		cb(null, "../public/profile");
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},
});

export const upload = multer({ storage: storage });

export const uploadPic = async (req, res) => {
	const Id = req.params.id;

	try {
		await Business.findByIdAndUpdate(Id, {
			$push: { profile: upload.single(req.body.profile) },
		});

		console.log(req.body.profile);
		res.send("Profile Uploaded");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

// export const sendMail = async (to, subject, text) => {
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
