import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const DashBoard = ({}) => {
  const navigate = useNavigate();
  async function changeHandler() {
    try{
      const res = await fetch('http://localhost:5000/api/users/dashboard/logout', {
        method: "POST",
        credentials: "include"
      })
      navigate("/");
    }
    catch(error){

    }
  }
  return (

    <div className=''>

    <button onClick={changeHandler}>logout</button>
    <div>This is DashBoard</div>
      
    </div>
  )
}

export default DashBoard
