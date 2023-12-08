import express from "express";
import DbConnect from "./config/db.js";
import userRouter from "./routes/user.js";
import businessRouter from "./routes/business.js";
import appointmentRouter from "./routes/appointment.js";

const app = express();

DbConnect("mongodb://127.0.0.1:27017/Schdulizer");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = 8000;

app.use("/user", userRouter);
app.use("/business", businessRouter);
app.use("/appointment", appointmentRouter);
app.listen(PORT, () => console.log(`Server started at Port:${PORT}`));
