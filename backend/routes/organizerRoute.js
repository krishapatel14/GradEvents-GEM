const { Router } = require('express');
const Organizer = require('../model/OrganizerModel');

const router = Router();

router.post('/signup', async (req, res) => {
  const { collegeCode, college, phoneNo, email, password } = req.body;
  console.log(req.body);
  await Organizer.create({
    collegeCode,
    college,
    phoneNo,
    email,
    password,
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
    if (org.password !==password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/getall',async(req,res)=>{
  const org=await  Organizer.find();
  res.send(org);
})



module.exports = router;