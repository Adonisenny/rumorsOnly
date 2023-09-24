import React from 'react'
import { Link } from 'react-router-dom'

export default function Logoutpage() {
  return (
    <div className='bg-slate-800'>

<h4 className='text-white '>You have been logged out</h4>
<h5 className='text-white '>You can click <Link to='/login' className='underline'>Login</Link> to login again </h5>

    </div>
  )
}
