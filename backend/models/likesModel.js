
import mongoose from "mongoose";

const Schema = mongoose.Schema

const LikesSchema = new Schema({

    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Post'
    },
   
    userId:{
 type:mongoose.Schema.Types.ObjectId,
 required:true,
 ref:'user'
    },
    
   
},{timestamps:true})

export default mongoose.model("Like",LikesSchema)



