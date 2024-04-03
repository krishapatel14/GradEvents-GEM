const userController=require('../controller/UserController')
const {Router}= require('express');
const User = require('../model/UserModel');

const router = Router();

router.post('/signup', async (req, res) => {  
    const {name,enrollment,college,phoneNo,email,password}= req.body;
    console.log(req.body);
    await User.create({
        name,
        enrollment,
        college,
        phoneNo,
        email,
        password,
    }).then(users=>res.json(users));
    // return res.redirect('/login');
}); 
router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        if (user.password !== password) {
          return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        res.json({ success: true, message: 'Login successful' });
      } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
  });
module.exports=router;