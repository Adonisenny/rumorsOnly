import  express  from "express"; 
import dotenv from 'dotenv'
import path from "path";

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
app.use(cors({
    origin:["http://localhost/3000", "https://testingrumors.onrender.com"],
}))
const upload = multer({dest:'uploads/'})
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/uploads',express.static('uploads'))


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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client\build', 'index.html'));
  });

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
