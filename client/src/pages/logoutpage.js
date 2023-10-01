import React from 'react'
import { Link } from 'react-router-dom'

export default function Logoutpage() {
  return (
    <div className='bg-white'>

<h4 className='text-black'>You have been logged out</h4>
<br /><br />
<h5 className='text-black'>You can click <Link to='/login' className='underline'> Login</Link></h5>

    </div>
  )
}
