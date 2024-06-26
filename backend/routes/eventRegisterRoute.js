const { Router } = require('express');
const eventReg = require('../model/EventRegistration')
const router = Router();

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
      const registerObj = new eventReg(register);
      registerObj.save().then((users) => res.json(users));
  });

  router.get("/participants",async (req,res)=>{
    const userenroll= req.query.userenroll;
    console.log(userenroll);
   const result = await eventReg.find({userenroll:userenroll});
   res.send(result);
  });

  module.exports=router;