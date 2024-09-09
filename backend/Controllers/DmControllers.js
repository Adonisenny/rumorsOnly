import mongoose from "mongoose";
import MyMessage from '../models/DmModel.js'



export const PostMessages = async(req,res,next) => {
try {
    const newDm = new MyMessage({
        Dm:req.body.dm

    })
    await newDm.save()
    res.status(200).json(newDm)
} catch (error) {
    console.log(error)
}
}


export const getallMessagecontrols = async(req,res) => {
    try {
     const myMessages = await MyMessage.find({}).sort({createdAt:-1})
         res.status(200).json(myMessages)
      
    } catch (error) {
        res.status(500).json({error:"messages not found"})
    }
    }


    export const getMessageControl = async(req,res) => {
   
        try {
            const theid = req.params.theid
            
       
           const themessage = await MyMessage.find({theid:theid})
           if(!themessage){
            return res.status(404).json({message:'message not found'})
           }
           res.status(200).json(themessage)
           
           } catch (error) {
               res.status(500).json({error:"message not found"})
       }
    }   