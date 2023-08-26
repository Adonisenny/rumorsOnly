import Like from "../models/likesModel.js"
import Rumor from "../models/rumormodel.js"


// export const createLikesControls = async(req,res,next) => { 
//     const postID =req.params.postID
//     const userId = req.params.userId
//    try {
//     const existingLike = await Like.findOne({postID,user:userId})
//     if(existingLike){
//         res.status(400).json({message:'liked already'})

//     }
//     const like = await Like.create({postID,userId})
//     const post = await Rumor.findOneAndUpdate({_id:postID}, {$inc:{likeCount:1}},{new:true})
//     res.json(post)
//    } catch (error) {
//     res.status(500).json({message:'server error'})
//    }
   
// }

// export const checkLikesControls = async(req,res,next) => { 
    
//    try {
//     const postID =req.params.postID
//     const userId = req.params.userId
//     const existingLike = await Like.findOne({postID,user:userId})
//     if(existingLike){
//         return res.json({liked:true})

//     }
//      res.json({liked:false})

//    } catch (error) {
//     res.status(500).json({message:'server error'})
//    }
   
// }

export const GetLiked = async(req,res,next) => {
    const userId = req.params.userId
    
    try {
        const likes = await Like.find({userId})
        res.status(200).json(likes)
    } catch (error) {
        console.log('I can not not fetch likes')
    }

}