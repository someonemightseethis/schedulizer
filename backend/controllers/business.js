
const Business=require('../models/business');
const multer=require('multer');
const nodemailer = require('nodemailer');


// Register Business
 async function registeredBusiness (req, res) {

    const data = {
        name:req.body.name,
        contactNumber:req.body.contactNumber,
        email: req.body.email,
        city: req.body.city,
        type: req.body.type,
        employees: req.body.employees,
        workField: req.body.workField,
        address: req.body.address,
        googleMapLink: req.body.googleMapLink
    }
    if (!data.name || !data.contactNumber || !data.email || 
         !data.city || !data.type || !data.employees || 
         !data.workField || !data.address || !data.googleMapLink)  {
        return res.status(400).send('All Fields are required.');
    }

    // Check if the username already exists in the database
    const existingUser = await Business.findOne({ email: data.email });

    if (existingUser) {
        res.send('Email already exists. Please choose a different Email.');
    } 
    else {
        const businessdata = await Business.create(data);
        sendMail(req.body.email, req.body.name, req.body.contactNumber)
        console.log(businessdata);
        return res.send("Business Registered Sucessfuly");
    }

};
async function getAll(req, res) {
    try {
        const businesses = await Business.find();
        return res.send(businesses);
    } catch (error) {
        console.error(error);
       return res.status(500).send('Internal Server Error');
    }
};
async function getById(req, res) {
    const Id = req.params.id;

    try {
        const business = await Business.findById(Id);

        if (!business) {
            return res.status(404).send('Business not found');
        }

        return res.send(business);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};
async function updateById(req, res) {
    const Id = req.params.id;

    try {
        // Check if the business exists
        const existingBusiness = await Business.findById(Id);

        if (!existingBusiness) {
            return res.status(404).send('Business not found');
        }

        // Update business fields
        existingBusiness.name = req.body.name || existingBusiness.name;
        existingBusiness.contactNumber = req.body.contactNumber || existingBusiness.contactNumber;
        existingBusiness.email = req.body.email || existingBusiness.email;
        existingBusiness.city = req.body.city || existingBusiness.city;
        existingBusiness.type = req.body.type || existingBusiness.type;
        existingBusiness.employees = req.body.employees || existingBusiness.employees;
        existingBusiness.workField = req.body.workField || existingBusiness.workField;
        existingBusiness.address = req.body.address || existingBusiness.address;
        existingBusiness.googleMapLink = req.body.googleMapLink || existingBusiness.googleMapLink;

        // Save the updated business
        const updatedBusiness = await existingBusiness.save();

        return res.send(updatedBusiness);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};
async function deleteById(req, res) {
    const Id = req.params.id;

    try {
        // Check if the business exists
        const existingBusiness = await Business.findById(Id);

        if (!existingBusiness) {
            return res.status(404).send('Business not found');
        }

        // Remove the business
        await Business.deleteOne({_id:Id});

        return res.send({ message: 'Business deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/profile')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

async function uploadPic(req,res){
    Id=req.params.id;
    //let imagePath=req.file.path;
    await Business.findByIdAndUpdate(Id, {
            $push: { profile:upload.single(req.body.profile)  }
        });
    console.log(req.body.profile);
    res.send('Profile Uploaded');
};
async function sendMail(to, subject, text){
    const transporter = nodemailer.createTransport({
    port: 465,
    service: 'gmail',
    auth: {
        user: 'fisakhan0347@gmail.com',
        pass: 'Khan2064&15',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});
    const mailData = {
        from: 'fisakhan0347@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };
    return await transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
}

module.exports = {
    registeredBusiness,
    getAll,
    getById,
    updateById,
    deleteById,
    uploadPic
};