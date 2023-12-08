import express from "express";
import {
	registeredBusiness,
	getAll,
	getById,
	updateById,
	deleteById,
	uploadPic,
} from "../controllers/business.js";

const businessRouter = express.Router();

// Register Business
businessRouter.post("/registered", registeredBusiness);
businessRouter.get("/all", getAll);
businessRouter.get("/:id", getById);
businessRouter.put("/:id", updateById);
businessRouter.delete("/:id", deleteById);
businessRouter.post("/profile/:id", uploadPic);

export default businessRouter;
