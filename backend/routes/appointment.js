const express = require("express");
const {addAppointments,getAll,getById,updateById,deleteById}=require('../controllers/appointment');

const router=express.Router();


// Register Business
router.post("/add",addAppointments);
router.get("/all",getAll);
router.get("/:id",getById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

// Login user 
//router.post("/appointments",businessAppointments);


module.exports = router;