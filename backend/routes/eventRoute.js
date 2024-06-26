const { Router } = require('express');
const Event=require('../model/EventModel');

const router = Router();

router.post('/addevent', async (req, res) => {
    const { eventName, eventType, eventDateTime, college,cordinatorName,contactEmail } = req.body;
    console.log(req.body);
    await Event.create({
      eventName,
      eventType,
      eventDateTime,
      college,
      cordinatorName,
      contactEmail
    }).then(org => res.json(org));
    // return res.redirect('/login');
  });

  router.get('/getevents',async(req,res)=>{
    const events=await Event.find();
    res.send(events);
  })

  router.get('/getevents/:eventType',async(req,res)=>{
    const type=req.params.eventType;
    const events=await Event.find({"eventType":type});
    res.send(events);
  })

module.exports=router