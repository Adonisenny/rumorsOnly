import mongoose from "mongoose"
const Schema = mongoose.Schema
const messageSchema = new Schema({
    conversationId:{
        type:Schema.Types.ObjectId,
        ref:'Conversation',
        required:true
    },
    senderId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Text:{
        type:String,
        required:true
        

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
   
   
})

export default mongoose.model("MyMessage",messageSchema)
