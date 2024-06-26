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
    },
    cordinatorName:{
        type:String,
        required:true
    },
    contactEmail:{
        type:String,
        required:true
    }

})

const event = model('event', eventSchema);
module.exports = event;