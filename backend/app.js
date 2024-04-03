const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser')
const userRoute=require('./routes/userRoute')
const cors=require("cors");
const User = require('./model/UserModel');


app.use(cors())

// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



mongoose.connect("mongodb://127.0.0.1:27017/gem");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.use('/user',userRoute)
app.post('/user/signup',async(req,res)=>{
    const {name,enrollment,college,phoneNo,email,password}= res.body;
    console.log(req.body);
 await User.create({
        name,
        enrollment,
        college,
        phoneNo,
        email,
        password,
    }).then(users=>res.json(users));
})
