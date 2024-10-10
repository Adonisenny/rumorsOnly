import mongoose from "mongoose";

const Schema =mongoose.Schema

const ConversationSchema = new Schema({
    members:{
        type:[Schema.Types.ObjectId],
        ref:'User',
        required:true
    },
    lastMessage:{
        type:Schema.Types.ObjectId,
        ref:'Message',
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
export default mongoose.model('Conversation',ConversationSchema)

