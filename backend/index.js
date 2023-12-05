const express=require('express');

const DbConnect=require('./config/db');
const userRouter=require('./routes/user');
const businessRouter=require('./routes/business');
const appointmentRouter=require('./routes/appointment');

const app = express();

DbConnect("mongodb://127.0.0.1:27017/Schdulizer");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT=8000;

app.use('/user',userRouter);
app.use('/business',businessRouter);
app.use('/appointment',appointmentRouter);
app.listen(PORT,()=>console.log(`Server started at Port:${PORT}`));