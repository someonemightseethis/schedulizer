const Appointment = require("./appointment");

const mongoose=require("mongoose");

const BusinessSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    email: {
        type:String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    employees:{
        type:Number,
        required:true
    },
    workField:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    googleMapLink:{
        type:String,
        required:true
    },
    profile:{
        type:String
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: 'Appointment' }],
});

// collection part
const Business = new mongoose.model("businesses", BusinessSchema);

module.exports=Business;