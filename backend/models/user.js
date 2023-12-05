const mongoose=require("mongoose");
// Create Schema
const Loginschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confPassword: {
        type: String,
        required: true
    }
});

// collection part
const User = new mongoose.model("users", Loginschema);

module.exports=User;