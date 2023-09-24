import React, { useEffect } from 'react'

export default function Notification({message,onClose}) {
    
   useEffect(() => {

    const setTimer = setTimeout(() => {
        onClose()
    },2000)
    return () => clearTimeout(setTimer)

   },[onClose])
   
  return (
    <p className='text-white bg-slate-900'>{message}</p>
  )
}
