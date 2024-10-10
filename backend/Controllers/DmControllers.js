import mongoose from "mongoose";
import MyMessage from '../models/DmModel.js'



export const PostMessages = async(req,res) => {
    const {conversationId,sender,text} =req.body
try {
    const newMessage = new MyMessage({
        conversationId,
        sender,
        text
        })
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage)
    
} catch (error) {
    res.status(500).json({error:error.message})
}
}


export const getMessagecontrols = async(req,res) => {
    try {
     const messages = await MyMessage.find({conversationId:req.params.conversationId})
     res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({error:"messages not found"})
    }
    }


    // export const getMessageControl = async(req,res) => {
   
    //     try {
    //         const theid = req.params.theid
            
       
    //        const themessage = await MyMessage.find({theid:theid})
    //        if(!themessage){
    //         return res.status(404).json({message:'message not found'})
    //        }
    //        res.status(200).json(themessage)
           
    //        } catch (error) {
    //            res.status(500).json({error:"message not found"})
    //    }
    // }   