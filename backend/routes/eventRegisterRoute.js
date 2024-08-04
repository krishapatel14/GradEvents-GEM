const { Router } = require('express');
const eventReg = require('../model/EventRegistration')
const router = Router();
const nodemailer = require('nodemailer');

router.post("/eventregister", async(req,res)=>{
    const {name,email,enrollment,college,phone,eventStr} = req.body;
    console.log(req.body);
    const eventName=eventStr.replace("-"," ");
    const register = {
      username: name,
      useremail: email,
      userenroll: enrollment,
      usercollege: college,
      usercontact:phone,
      userEvent:eventName,
    };
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "krishapatel1403@gmail.com",
        pass: "shcimjssqdksjtxz",
      },
    });
    transporter.sendMail({
      from: "krishapatel1403@gmail.com",
      to: email,
      subject: "Event registeration",
      text: `Mr/Mrs ${name} have registered in ${eventStr} successfully`
    });

    const registerObj = new eventReg(register);
    registerObj.save().then((users) => res.json(users));
  });

  router.get("/participants",async (req,res)=>{
    const userenroll= req.query.userenroll;
    console.log(userenroll);
   const result = await eventReg.find({userenroll:userenroll});
   res.send(result);
  });
  router.get('/getevents/:userEvent',async(req,res)=>{
    const userEvent = req.params.userEvent;
    let event=userEvent.replace("-"," ")
    console.log(event);
        const users = await eventReg.find({ userEvent: event });
        console.log(users);
        res.send(users);
      })

  module.exports=router;