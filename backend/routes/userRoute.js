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

router.get('/:enrollment',async(req,res)=>{
  const enrollment=req.params.enrollment;
  const data=await User.find({"enrollment":enrollment});
  console.log(data);
  res.send(data);
})



module.exports = router;