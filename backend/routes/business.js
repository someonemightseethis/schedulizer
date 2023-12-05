const express = require("express");
const {registeredBusiness,getAll,getById,updateById,deleteById,uploadPic}=
require('../controllers/business');

const router=express.Router();


// Register Business
router.post("/registered",registeredBusiness);
router.get("/all",getAll);
router.get("/:id",getById);
router.put("/:id",updateById);
router.delete("/:id",deleteById);
router.post("/profile/:id",uploadPic);


module.exports = router;