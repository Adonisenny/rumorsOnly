import mongoose from 'mongoose'
import Conversation from '../models/conversationModel.js'


export const CreateConversation = async (req,res)=> {
    const {senderId,receiverId} = req.body
try {
    let existingConversation = await Conversation.findOne({
      members:{ $all:[senderId, receiverId]}  
    });
    if(existingConversation){
        return res.status(200).json(existingConversation)
    }
    //If no conversation CREATE NEW CONVO
    const newConversation = new Conversation({
        members:[senderId, receiverId]
    });
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation)
    
} catch (error) {
    res.status(500).json({error:error.message})
}
}

export const getConversation = async(req,res) => {
    try {
        const conversations = await Conversation.find({
            members:{$in:[req.params.userId]}
        });
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

}