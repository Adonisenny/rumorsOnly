import mongoose from "mongoose" 


const GHomeSchemes = new mongoose.Schema({
    myusername:{
        type:String,
        required:true
    },
    

mystory:{
    type:String,
    required:true
},








},{timestamps:true})
export default mongoose.model("ghome", GHomeSchemes)