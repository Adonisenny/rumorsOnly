import Commentcomment from '../models/commentcommentmodel.js'
import mongoose from 'mongoose'

export const createCommentsComments = async (req,res,next) => {
    try {
const {postId, content } =req.body

const commentcomment= await Commentcomment.create({
    postId,content
})
res.status(commentcomment)
        
    } catch (error) {
        res.status(500).json({error:"comment not created"})
        // res.status(500).json({message:'Server is down server is down'})
    }
}


export const getcommentcommentControl = async(req,res) => {
   
    try {
     const postId = req.params.postId

    const commentscomments = await Commentcomment.find({postId:postId})
    if(!commentscomments){
     return res.status(404).json({message:'comment not found'})
    }
    res.status(200).json(commentscomments)
    
    } catch (error) {
        res.status(500).json({error:"comment not found"})
}
}   
   
   
   

    



    export const getallcommentcommentcontrols = async(req,res) => {
        try {
         const myCommentscomments = await Commentcomment.find({}).sort({createdAt:-1})
             res.status(200).json(myCommentscomments)
          
        } catch (error) {
            console.log('error')
        }
        }

