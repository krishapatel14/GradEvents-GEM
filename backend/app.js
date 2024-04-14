const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoute=require('./routes/userRoute')
const cors=require("cors");
// const User = require('./model/UserModel');
const orgRoute=require('./routes/organizerRoute')
const eventRoute=require('./routes/eventRoute')


app.use(cors())

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



mongoose.connect("mongodb://127.0.0.1:27017/gem");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/user',userRoute)
app.use('/organizer',orgRoute)
app.use('/event',eventRoute)


