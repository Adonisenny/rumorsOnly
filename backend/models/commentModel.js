import mongoose from "mongoose"
const Schema = mongoose.Schema
const commentSchema = new Schema({
    thecomments:{
        type:String,
        required:true,
        

    },
    postedBy: {
        type:String,
         required:true

    },
    myid:{
        type:String,
        required:true,
        

    },
    theId:{
        type:String,
        
    },
    likes:{
        type:Array,
        default:[]
    },
   
   
},{timestamps:true})

export default mongoose.model("Comment",commentSchema)
