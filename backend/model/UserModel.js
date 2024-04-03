const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },//last name // college // number // EID // 
    enrollment:{
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
        default: 'user',
        enum: ['user', 'admin']
    },
    college:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
    }
}, { timestamps: true });


const user = model('user', userSchema);

module.exports = user;