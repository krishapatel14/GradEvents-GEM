const {Schema,model} =require('mongoose')

const eventSchema=new Schema({
    eventName:{
        type:String,
    },
    eventType:{
        type:String
    },
    eventDateTime:{
        type:Date
    },
    college:{
        type:String
    }

})

const event = model('event', eventSchema);
module.exports = event;