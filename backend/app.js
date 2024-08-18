const express = require("express");
const connectDB = require('./db');
const app = express();
const cors = require ("cors");
require ("dotenv").config();
const PORT =  5000;
  connectDB();
  app.use(express.json());
  app.use(cors());

  
app.use("/api/user", require("./routes/user"));

app.listen(PORT,() =>{
    console.log(`http://localhost:${PORT}`);
});