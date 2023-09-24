import { Link } from "react-router-dom";
import { FaComment,  FaTrash,FaThumbsUp } from "react-icons/fa";
import axios from "axios";
import { useCommentContext } from "../Hooks/useCommentContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authcontext";


const CommentContent = ({comment}) => {

  const{dispatch2}=useCommentContext()
  const  {user} = useContext(AuthContext)
  const [like, setLike] = useState(comment?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const [color,setColor] = useState(false)
  const [isdisabled,setIsDisabled] =useState(false)
  const myusername = user?.username



    const likeHandler = () => {
        try {
          axios.put("https://backendrumors.onrender.com/api/comments/" + comment?._id + "/like", { myid: user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

//delete function
      const handleDelete = async() => {
        
        try {
             const trydelete = await axios.delete('https://backendrumors.onrender.com/api/comments/' + comment?._id)
             const deletedComments =await trydelete.data
            
             dispatch2({type:'DELETE_COMMENTS', payload:deletedComments})
         } catch (error) {
             console.log('It has not been deleted')
         }
     
     }
const handleClick3 = (id) => {}


     const mystyle ={
        backgroundColor:"#6A5ACD",
        borderRadius:'12px',
        padding:'2px'
      }
      const mystyles ={
        backgroundColor:""
      }
      useEffect(() => {
        setIsLiked(comment?.likes?.includes(user?._id));
      }, [user?._id, comment?.likes]);


      useEffect(() => {
        if(myusername !==comment?.postedBy ){
          setIsDisabled(true)
        }
      },[myusername,comment.postedBy])
    

      useEffect(() => {
        if(like >= 1){
          setColor(true)
        }else{
          setColor(false)
        }
      },[like])
        
    
    return (  
      <div>
      
      <div className='workout-details2' >
        <p className="absolute  right-[12px] bottom-[1px]">@{comment?.postedBy}</p>
        <p>{comment?.thecomments}</p> 
       <br/>
   
      <Link onClick={likeHandler} className="absolute left-[10px] bottom-[11px] text-white" style={color ? mystyle:mystyles}><FaThumbsUp size={14}  className="text-stone-800" /></Link>
     <p className="absolute left-[38px] bottom-2">{like}</p>
    
      <span> <button  onClick={handleDelete} disabled={isdisabled} ><FaTrash size={14}  className="text-stone-800" /></button></span>
      <Link to={`/comments/${comment?.myid}/commentscomments/${comment._id}`} className="absolute left-[99px] bottom-[13px] text-white"  onClick={() => handleClick3(comment._id)} ><FaComment size={14}  className="text-stone-800"/></Link>
      
    </div>
       </div>

        
    );
}
 
export default CommentContent;