const express = require("express");
const {Login,SignUp,auth}=require('../controllers/user');

const router=express.Router();


// Register User
router.post("/signup",SignUp);

// Login user 
router.post("/login",Login);

//getUserdata
router.post("/user",auth);


module.exports = router;