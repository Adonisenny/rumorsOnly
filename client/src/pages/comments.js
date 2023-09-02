import { useContext, useEffect, useState } from "react";


import { useCommentContext } from "../Hooks/useCommentContext";
import axios from "axios";

import '../MycssPages/commentcss.css'
import { AuthContext } from "../Context/authcontext";
import {useLocation } from 'react-router-dom';

import CommentContent from "./commentContent";


const Comments = ({slicedcomms}) => {
  
    
    const{comments,dispatch2}=useCommentContext()
    

    // const routerParams = useParams()
    const location =useLocation()
    const locateAccount = location.pathname.split('/')[2]
const  {user} = useContext(AuthContext)
const [thecomments,setTheComments] =useState('')
const [myid,setMyId] = useState(locateAccount)

const postedBy = user?.username
const [isdisabled,setIsDisabled] =useState(false)


                              
    
  


//Post comments
    const handleSubmit = async(e) => {
        e.preventDefault()
       
       
        try {
            const myComments = {thecomments,postedBy,myid}
            const res = await axios.post('https://backendrumors.onrender.com/api/comments',myComments)
            
            const otherJson = await res.data
           
         
                
               console.log(otherJson)
                 setTheComments('')
               
                
                
                dispatch2({type:'CREATE_COMMENTS',payload:otherJson})
              
               
      } catch (error) {
             console.log(error)
           
        }
    }
    








    let thelength =thecomments.length
    useEffect(() => {
        if(thelength < 15 || thelength > 150){
            setIsDisabled(true)
           }else{
            setIsDisabled(false)
           }
       },[thelength])

      



    useEffect(() => {
        const fetchit = async() => {
      
      
            try {
            const response = await axios.get(`https://backendrumors.onrender.com/api/comments/${myid}`)
            
            const comms = await response.data
          
         
             dispatch2({type:'SET_COMMENTS',payload:comms})
           
        
           } catch (error) {
            console.log(error)
           }
        }
        fetchit()
    },[dispatch2,myid])
    
   

    
   



// stamp date



 const myday = slicedcomms?.createdAt
 console.log(slicedcomms?.createdAt)
const postday = new Date(myday)
const currentDate = new Date()
const trydate = (postday.getDate() +  " " + postday.toLocaleString('default', { month: 'long' }) + " " + postday.getFullYear())
currentDate.setHours(0,0,0,0)


// Filtering out comments and matching the one that matches with post
const matchedcomments = comments?.filter(cums =>cums?.myid === locateAccount).map(filteredrumour => {
    return filteredrumour
    }
)






  


    return ( 
        <div className="mt-8">
        <form className="text-center ">
<textarea  

className=" bg-slate-800 text-red rounded-[12px] h-[80px] w-[185px] md:w-[350px]"
value={thecomments}
onChange={(e) =>setTheComments(e.target.value)}
style={{"borderRadius":"4px","color":"white"}}
>
</textarea>
<br />
<button onClick={handleSubmit}  disabled={isdisabled} className=" text-[10px] ">comment</button>

</form>
<br />


<div className="workout-details"> 
 {comments?.map((comment) => (
    
<CommentContent comment={comment}/>
))}
</div>
</div>

     );
}
 
export default Comments;