import mongoose from "mongoose"
const Schema = mongoose.Schema
const messageSchema = new Schema({
    Dm:{
        type:String,
        required:true,
        

    },
    
   
   
},{timestamps:true})

export default mongoose.model("MyMessage",messageSchema)
