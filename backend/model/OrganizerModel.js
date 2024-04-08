const { Schema, model } = require('mongoose');

const organizerSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },//last name // college // number // EID // 
    collegeCode:{
        type : Number ,
        required:true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'organizer'
    },
    college:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    }
}, { timestamps: true });


const organizer = model('organizer', organizerSchema);
module.exports = organizer;