import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDmContext } from '../../Hooks/useDmContext'

export const Endtoend =()=> {
    const[directMessage,setDirectMessage] =useState('')
    const {message,dispatch3}=useDmContext()
    const handleChange =(e)=> {
setDirectMessage(e.target.value)

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
       
       try {
        const Dm = {directMessage}
        const res = await axios.post('https://backendrumors.onrender.com/api/directmessages', Dm)
        const otherRes = await res.data
        setDirectMessage('')
        dispatch3({type:'CREATE_DM',payload:otherRes})
        
       } catch (error) {
        console.log("can't post")
        
       }

    }

    useEffect(() => {
      const fetchit = async() => {
        try {
          const response = await axios.get('https://backendrumors.onrender.com/api/directmessages/')
          const messages = await response.data
          console.log(messages)
        } catch (error) {
          console.log("can't fetch")
          
        }
      }
      fetchit()
    },[])
  return (
    <>

    {/* user 1 and user 2*/}

  
    <form onSubmit={handleSubmit}>
      <input
      value={directMessage}
      type='text'
      onChange={handleChange}
      
      />
      <button>send</button>
    </form>
    </>
  )
}

export default Endtoend
