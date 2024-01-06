import Comment from '../models/commentModel.js'
import mongoose from 'mongoose'
//post controllers



export const CommentController = async(req,res) => {
    try {
       

        const newComment =  new Comment({
          thecomments:req.body.thecomments,
          postedBy:req.body.postedBy,
          myid:req.body.myid
        })
       await newComment.save()
       res.status(200).json(newComment)
        
        // const savedrumor = await rumor.save()
       
    } catch (error) {
        console.log(error)
    
    }    
    }



    
    
//Get  comments attached to a particular post
    export const getCommentControl = async(req,res) => {
   
        try {
            const myid = req.params.myid
            console.log(myid)
       
           const comment = await Comment.find({myid:myid})
           if(!comment){
            return res.status(404).json({message:'comment not found'})
           }
           res.status(200).json(comment)
           console.log(comment)
           } catch (error) {
               res.status(500).json({error:"comment not found"})
       }
    }   


        export const getallCommentcontrols = async(req,res) => {
            try {
             const myComments = await Comment.find({}).sort({createdAt:-1})
                 res.status(200).json(myComments)
              
            } catch (error) {
                res.status(500).json({error:"comment not found"})
            }
            }

 
            export const deleteCommentControls = async(req,res,next) => {
                try {
                    const id =req.params.id
                    if(!mongoose.Types.ObjectId.isValid){
                        return res.status(404).json({error:"can't delete"})
                    }
                    const deleted = await Comment.findByIdAndDelete(id)
                    return res.status(200).json(deleted)
                } catch (error) {
                    res.status(500).json({error:"comment not created"})
                    
                }
                }
                export const updateCommentLikes = async(req,res,next) => {
   
                    try {
                      const comms = await Comment.findById(req.params.id);
                      if (!comms.likes.includes(req.body.myid)) {
                        await comms.updateOne({ $push: { likes: req.body.myid } });
                        res.status(200).json("The post has been liked");
                      } else {
                        await comms.updateOne({ $pull: { likes: req.body.myid } });
                        res.status(200).json("The post has been disliked");
                      }
                    } catch (err) {
                      res.status(500).json(err);
                    }
                  
                    }