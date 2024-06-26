const { Router } = require('express');
const Organizer = require('../model/OrganizerModel');
const bcrypt=require('bcrypt');
const event = require('../model/EventModel');
const router = Router();

router.post('/signup', async (req, res) => {
  const { collegeCode, college, phoneNo, email, password } = req.body;
  console.log(req.body);
  const hashpwd= await bcrypt.hash(password,10);
  console.log(hashpwd);
  await Organizer.create({
    collegeCode,
    college,
    phoneNo,
    email,
    password:hashpwd,
  }).then(org => res.json(org));
  // return res.redirect('/login');
});

router.post('/login', async (req, res) => {

  // try {
  //   const { email, password } = req.body;
  //   const token = await User.matchPasswordAndGenerateToken(email, password)
  //   return res.cookie('token', token);
  // } catch (error) {
  //   console.log('error');
  // }

  const { email, password } = req.body;
  try {
    const org = await Organizer.findOne({ email});
    console.log(org);
    if (!org) {
      return res.status(401).json({ success: false, message: 'Invalid email or user not found' });
    }
    if (!bcrypt.compare(password,org.password)) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    // res.json({ success: true, message: 'Login successful' });
    res.send(org);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/getall',async(req,res)=>{
  const org=await  Organizer.find();
  res.send(org);
})

router.get("/participants",async (req,res)=>{
  const clg = req.query.college;
  console.log(clg);
 const result = await event.find({college:clg});
 res.send(result);
});

router.get("/:email",async(req,res)=>{
  const email=req.params.email;
  const result = await Organizer.findOne({email});
  console.log(result);
  res.send(result);
})

module.exports = router;