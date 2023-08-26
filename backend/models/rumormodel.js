
import mongoose from "mongoose";

const Schema = mongoose.Schema

const rumorSchema = new Schema({
    story:{
        type:String,
        required:true,
        

    },
    postedBy: {
        type:String,
        required:true

    },
    theId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    likes:{
        type:Array,
        default:[]
    }
    
    
   
},{timestamps:true})

export default mongoose.model("Rumor",rumorSchema)



