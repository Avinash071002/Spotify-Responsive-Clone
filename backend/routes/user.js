const express = require("express");
const User = require("../models/User");
const { generateTOken } = require("../helper/generateToken");

const router = express.Router();

router.post("/login", async (req, res) =>{
    console.log(req.body);

  try{
    const {username, password} = req.body;

    let user = await User.findOne({username});
    console.log(user);
    if(!user){
         user = await User.findOne({email: username});
    } 
     if(!user){
        return res.json({success:false, message: "Invalid Credentials"});
    } else{
        if(user.password !==password)
            return res.json({success :false, message :"Invalid Credentials"});
          else{
    let  token = await generateTOken(user._id);
          console.log(token, user);

          return res.json({
            success : true,
             token,
              user,
               message :"Login successfully"});
    }
    }
  }catch(error){
    return res.json({success : false, message :"error.message"});

  }

});

router.post("/register", async(req, res) =>{
    console.log(req.body);
    const {username,password,email, contact, DOB, gender} = req.body;

    if (!email || !username || !password || !contact || !DOB || !gender)
      return res.json({ success: false, message: "All fields are required" });

    try{
    const user = await User.create({
      email,
      username,
        password,
         contact,
          DOB,
         gender});
    console.log(user);
    if(user){
      token = generateToken(user._id);
      
      console.log(token);
       res.json({success : true, message: "user created", user, token});
    }else{
        res.json({success : false, message: "some error created"});

    }
} catch (error){
    console.log(error);
    res.json({success : false, message: "some server error created"});

}
});
router.get("/users", async(req, res) =>{
   const users = await User.find();
   res.json({users, success : true, message: "user found"});

});

module.exports = router;
