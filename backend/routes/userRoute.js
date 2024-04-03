const userController=require('../controller/UserController')
const {Router}= require('express');
const User = require('../model/UserModel');

const router = Router();

// router.post('/signup', async (req, res) => {  
//     const {name,enrollment,college,phoneNo,email,password}= req.body;
//     console.log(req.body);
//     await User.create({
//         name,
//         enrollment,
//         college,
//         phoneNo,
//         email,
//         password,
//     }).then(users=>res.json(users));
//     // return res.redirect('/');
// }); 

// router.get('/signup', (req, res) => {    
//     return res.render('signup');
//  });

module.exports=router;