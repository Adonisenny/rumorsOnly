import { useContext, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { Link } from "react-router-dom";
import Notification from "./Notifications";



const Loginform = () => {
    const {dispatch} = useContext(AuthContext)

    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')
    const [Error,setError] =useState(null)
    const [poping,setPoping] = useState(false)
     const navigate = useNavigate()
    


    const handleSubmit = async(e) => {
        e.preventDefault()
        const loginfo= {username,password}
        if(!username && !password){
            setError("Complete all fields")
        }
        dispatch({type:"LOGIN_START"})
       
        try {
            // const res = await axios.post('https://backendrumors.onrender.com/api/auth/login',loginfo)
            const res = await axios.post('https://backendrumors.onrender.com/api/auth/login',loginfo)
             const otherJson =  res.data
           
            
                setUsername("")
                setPassword("")
                
                dispatch({type:"LOGIN_SUCCESS",payload:otherJson})
                setError(null)
                
                    setPoping(true)
                    setTimeout(() => {
                        navigate('/')
                    },2000)
                  
    
                  


        } catch (error) {
            setError("Something went wrong")
           
        }
    }

    const closeNotify = () =>{
        setPoping(false)
            }
    return (  
        <>
         {poping && <Notification message="Logged in successfully!" onClose={closeNotify} />}
         {poping && <Notification message={`welcome ${username}`}
         
         
         onClose={closeNotify} />}
<form className="contains">
    
    <br /> <br />

<label>Username</label>
<input 

type= "text"
placeholder="username"
onChange= {(e) => setUsername(e.target.value)}
value={username}
className="px-[35px] py-[10px] rounded-xl m-0"

/>
<label>Password</label>
<input 
className="px-[35px] py-[10px] rounded-xl"
type="password"
placeholder="password"
onChange= {(e) => setPassword(e.target.value)}
value={password}


/>
<button onClick={handleSubmit}>Submit</button>
{/* {Error &&  <p style={{"backgroundColor":"white","color":"red","paddingLeft":"30px","paddingTop":"15px",'paddingBottom':'15px','borderRadius':'8px'}}>{Error}</p>} */}
<p>If you are not registered <Link to='/registration' className='reglink'>Register.</Link></p>
</form>
</>

    );
}
 
export default Loginform;