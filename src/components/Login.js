import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({isLoggedIn, setIsLoggedIn}) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const [wrongCredentials, setWrongCredentials] = useState(false);

    useEffect( () => {
      if(email.length === 0 && password.length ===0){
        setWrongCredentials(false);
      }
    }, [email, password])    

    async function changeHandler (e){
    e.preventDefault();
    try{
   const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        email, password,
      })
     })
       const data = await res.json();
   if(data.success){
    setIsLoggedIn(true);
    navigate("/dashboard");
   }
   else {
    if(email.length !==0 || password.length !==0 ){setWrongCredentials(true);}
    setIsLoggedIn(false);
    navigate("/login");
   }
   }
  catch(error){
    return error;
  }
    
  }
        
        return (
          <div>
            <button onClick={() => navigate("/")}>back</button>
            <h1 className="text-3xl font-bold underline text-center mt-10">Login </h1>
            <div>
           
              <form onSubmit={changeHandler}>
                <input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value) }></input>
                <input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                
                  <button type="submit">Login</button>
                 
              </form>
              { wrongCredentials && <p className="text-red-500"> Wrong Credentials! Please try again. </p> }
            </div>
          </div>
        );
}

export default Login
