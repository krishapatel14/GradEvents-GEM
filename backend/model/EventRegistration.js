const { Schema, model } = require("mongoose");

const eventRegSchema = new Schema({
    username: String,
    useremail: String,
    userenroll: Number,
    usercollege: String,
    usercontact: Number,
    userEvent: { type: String, default: "" },
  });
  
const eventReg = model("registeration", eventRegSchema)

module.exports=eventReg;