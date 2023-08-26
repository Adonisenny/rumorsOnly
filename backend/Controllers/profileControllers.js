import Profile from "../models/profileModel.js"

export const createProfile = async(req,res) => {
    const profile = new Profile({
bio:req.body.bio,
userId:req.body.userId,
imageUrl:req.file?.path

    })
    try {
        const savedProfile = await profile.save()
        res.status(200).json(savedProfile)
      
    } catch (error) {
        console.log(error)
    }

}

export const getAllProfile = async(req,res,next) => {
    try {


        const profiles = await Profile.find()
        res.status(200).json(profiles)
    } catch (error) {
        next(error)
    }
}
export const getProfile = async(req,res,next) => {
    try {
        const profile= await Profile.findById(req.params.userId)
        res.status(200).json(profile)
    } catch (error) {
        console.log(error)
    }
}
export const updatedProfile = async(req,res,next) => {
  

    try {
        const profileId =req.params.id
       const imageUrl=req.file?.path
    
        const updateProfile = req.body

        if(req.file){
            updateProfile.imageUrl = req.file.path||req.file.location;
        }
        const profile = await Profile.findOneAndUpdate(
            {userId:profileId},
            // {$set:{imageUrl:updateProfile.imageUrl}},
           updateProfile,
            
            {new:true}
            );
            if(!profile){
                return res.status(404).json({message:'profile not found'})
            }
            res.status(200).json({profile})
          
        
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}