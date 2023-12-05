const express = require("express");
const User=require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Register User
 async function SignUp (req, res) {

    const data = {
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        phoneNumber: req.body.phonenumber,
        email: req.body.email,
        password: req.body.password,
        confPassword: req.body.confpassword
    }
    if (!data.firstName || !data.lastName || !data.phoneNumber || 
         !data.email || !data.password || !data.confPassword)  {
        return res.status(400).send('All Fields are required.');
    }

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
        res.send('User already exists. Please choose a different Email.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await User.create(data);
        console.log(userdata);
        return res.send("User Registered Sucessfuly");
    }

};

// Login user 
 async function Login (req, res) {
    try {
        const check = await User.findOne({ email: req.body.email });
        if (!check) {
            return res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            return res.send("wrong Password");
        }
        const token=jwt.sign({id:existingUser.id},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).send({message:"Login Successfuly",success:true,token});
        
    }
    catch {
        return res.send("wrong Details");
    }
};

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

module.exports = {
    SignUp,
    Login,
    auth
};