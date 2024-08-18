const jsonWeb  = require("jsonwebtoken");


exports.generateTOken =  async (id) =>{
   let token = jsonWeb.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '24h' //expires in 24 hours
   })
   return token;
};