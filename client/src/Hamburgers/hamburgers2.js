import {RiCloseLine} from 'react-icons/ri'
import {HiOutlineMenu} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { AuthContext } from '../Context/authcontext';

const Hamburgertwo = ({menuOpen,setMenuOpen,handleLogout,myusername}) => {
   
    const {user} = useContext(AuthContext);
   
    const handleclick = () => {
        setMenuOpen(false)
      
    }


return ( 
        <>
<div   className="absolute cursor-pointer md:hidden block top-2 right-0">

  {menuOpen ? (
    <RiCloseLine onClick={handleclick} className='w-6 h-6 text-black mr-2' />
):
<HiOutlineMenu  onClick ={() => setMenuOpen(true)} className='w-6 h-6 text-black mr-2'  />
}  


</div>


<div className={`absolute top-0 h-screen w-1/3 bg-gradient-to-tl from-white/10 to-[#9998a4] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${ menuOpen ?'left-0':'-left-full'}`}>





{  <Link to='/'>Home</Link>}
<br />
{myusername ? <Link onClick={handleLogout}    >Logout</Link>:  <Link to='/registeration'>Register</Link>}



<br />
<Link  to={`/profilesetup/${user?._id}`}>Profile SetUp</Link>

    </div>
    </>


     );
}
 
export default Hamburgertwo;