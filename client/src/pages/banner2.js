import { FaEdit,FaEnvelope } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


import { useCommentContext } from "../Hooks/useCommentContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import { useLocation } from "react-router-dom";
import axios from "axios";


const ProfileBanner2 = ({myprofile}) => {
    const {user} = useContext(AuthContext);
    const{dispatch2} = useCommentContext();
   
    const [profileDetails, setProfileDetails] = useState()
     const user_id = user?._id
     console.log(user_id)
    // const user_theid =user?.theid
   
     const idlocation = useLocation()
  
     const userId = idlocation.pathname.split('/')[2]
     

    
    useEffect(() => {
        const fetchit = async() => {
          
    try {
            // const response = await axios.get('https://backendrumors.onrender.com/api/profile')
             const response = await axios.get(`https://backendrumors.onrender.com/api/profile/${userId}`)
            const pdetails =  response.data
            setProfileDetails(pdetails)
          
          
            dispatch2({payload:pdetails})
           
        
           } catch (error) {
            console.log(error)
           }
        }
        fetchit()
    },[dispatch2,userId])


    





    return (  


<div className="flex flex-col gap-6 items-center justify-center relative ">
    
{/* <div className="md:hidden">
{(profileDetails || null ) && profileDetails?.filter(profileDetail => profileDetail?.userId === user_id).map((filteredprofile) =>{
  return <div key={filteredprofile?._id}> */}

 {/* <img src={`https://backendrumors.onrender.com/${filteredprofile?.imageUrl}`} alt="Not seen yet"  className="w-[110px] h-[110px] rounded-[50%]"/> */}
 {/* <img src={`https://localhost:7000/${filteredprofile?.imageUrl}`} alt="Not seen yet"  className="w-[110px] h-[110px] rounded-[50%]"/>
    <p>{filteredprofile.bio}</p> */}
    {/* <Link to={`/profilesetup/${user?._id}`} className="text-black absolute top-36 right-[290px] md:right-[660px] "><FaEdit /></Link> */}
    {/* <Link to='' className="text-black absolute top-36 right-[310px] md:right-[660px] "><FaEnvelope /></Link> */}
  
    
    
   {/* </div>
   
})

} */}
{/* </div> */}

   {profileDetails?.map((detail) => {
    return <div className="text-center" key={detail?._id}> 
    
    <img src={`https://backendrumors.onrender.com/${detail?.imageUrl}`} alt="No Profile yet"  className="w-[110px] h-[110px] rounded-[50%]"/>

        <p>{detail?.bio}</p>

          {userId === user_id ?<Link to={`/profilesetup/${user?._id}`} className="text-black absolute top-36  "><FaEdit /></Link>:
     <Link to='' className="text-black absolute top-36 "><FaEnvelope /></Link>} 
        </div>
   })}


</div>


    );
}
 
export default ProfileBanner2;