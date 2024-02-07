import  express  from "express"; 
import dotenv from 'dotenv'

import mongoose from "mongoose";
import cors from 'cors'
import authrouter from './routes/authroutes.js'
import multer from 'multer'
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import rumorrouter from './routes/rumorroutes.js'

import commentrouter from './routes/commentRoutes.js'
import profilerouter from './routes/profileRoutes.js'
import likesrouter from './routes/likesroutes.js'
import commentcommentrouter from './routes/commentcommentroutes.js' 


 // express app
const app = express()
const upload = multer({dest:'uploads/'})
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/uploads',express.static('uploads'))
app.use(cors({
    origin:["http://localhost/3000", "https://testingrumors.onrender.com"],
}))








//middlewares
 app.use(express.json())
 
app.use((req,res,next)=> {
    
    next()
})

app.use('/api/rumors',rumorrouter)
app.use('/api/auth',authrouter)

app.use('/api/comments',commentrouter)
app.use('/api/commentcomment/comments',commentcommentrouter)
app.use('/api/profile',upload.single('image'),profilerouter)
app.use('/api/likes', likesrouter)
app.use('/api/profile/likes', likesrouter)
//Routes
app.get("/", (req,res,next)=>{
    res.json("the workout page1")
})

mongoose.connect(process.env.MONGO)
.then(() => {
    if(process.env.PORT){
    app.listen(process.env.PORT, (req,res,next)=> {
        console.log("connected to db")
    
        })
    }
})
.catch((errror) => {
    console.log(errror)
})






const express = require("express");

// Set middleware of CORS 
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://testingrumors.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
}
)

