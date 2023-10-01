import { FaThumbsUp, FaTrash } from "react-icons/fa";



const FourIcons = ({trydate,color,mystyle,mystyles,like,handleClick,isdisabled,likeHandler}) => {
    
    return ( 
        <div>

<div>
       <p className='text-sm  md:text-sm absolute left-[150px] bottom-[10px]'>{trydate}</p>
       
          <span className='span2' style={color ? mystyle:mystyles}><button onClick={likeHandler} ><FaThumbsUp size={14}  style={color? mystyle:mystyles} /></button></span>
          <p className="absolute left-12 bottom-2 ">{like}</p>
          <span> <button onClick={handleClick} disabled={isdisabled}><FaTrash size={14} className="text-stone-800" /></button></span>
          

 </div>  

        </div>
     );
}
 
export default FourIcons;



