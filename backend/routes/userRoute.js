const { Router } = require('express');
const User = require('../model/UserModel');
const bcrypt=require('bcrypt')

const router = Router();

router.post('/signup', async (req, res) => {
  const { name, enrollment, college, phoneNo, email, password } = req.body;
  console.log(req.body);
  let hashpwd = await bcrypt.hash(password,10);
  console.log(hashpwd);
  await User.create({
    name,
    enrollment,
    college,
    phoneNo,
    email,
    password:hashpwd,
  }).then(users => res.json(users));
  // return res.redirect('/login');
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or user not found' });
    }
    if (!bcrypt.compare(password,user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    // res.json({ success: true, message: 'Login successful' });
    res.send(user)
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/:enrollment',async(req,res)=>{
  const enrollment=req.params.enrollment;
  const data=await User.find({"enrollment":enrollment});
  console.log(data);
  res.send(data);
})



module.exports = router;