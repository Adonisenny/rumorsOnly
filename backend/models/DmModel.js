import mongoose from "mongoose"
const Schema = mongoose.Schema
const messageSchema = new Schema({
    message:{
        type:String,
        required:true,
        

    },
    
   
   
},{timestamps:true})

export default mongoose.model("MyMessage",messageSchema)
