import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavLink to="/login" > 
    <button className="h-[20rem] w-[20rem] text-[black]"> Login </button>
    </NavLink>  

    <NavLink to="/signup">
      <button  className="h-[20rem] w-[20rem] text-[black]"> Singup </button>
    </NavLink> 
    </div>
  )
}

export default Home
