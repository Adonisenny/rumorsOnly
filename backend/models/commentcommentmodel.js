import mongoose from "mongoose"
const Schema = mongoose.Schema
const commentcommentSchema = new Schema({
    content:{
        type:String,
        required:true,
        

    },
    postId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
         required:true

    },
   
    
   
},{timestamps:true})

export default mongoose.model("Commentcomment",commentcommentSchema)
