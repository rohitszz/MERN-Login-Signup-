import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Signup = ({isSignedUp, setIsSignedUp, copyEmail, setcopyEmail}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 
  const [wrongCredentials, setWrongCredentials] = useState(false);

  useEffect( () => {
        if(email.length == 0 && password.length == 0 && confirmPassword.length == 0){
          setWrongCredentials(false);
        }
      }, [email, password, confirmPassword] )


  async function changeHandler (e){
    e.preventDefault();
    try{
   const res = await fetch("http://localhost:5000/api/users/signuptoken", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        email, password, confirmPassword,
      })
   })

   const data = await res.json();

   if(data.success){
    setIsSignedUp(true);
    setcopyEmail(email);
    navigate("/signup/otp", { state: { token: data.token } });
   }
   else {
    if(email.length !==0 || password.length !==0 || confirmPassword.length !==0 ){setWrongCredentials(true);}
    setIsSignedUp(false);
    navigate("/signup");
   } }
   
  catch(error){
    return error;
  }
    
  }
  
  return (
    <div>
    <button onClick={() => navigate("/")}>back</button>
    <h1 className="text-3xl font-bold underline text-center mt-10"> Signup </h1>
    <form onSubmit={changeHandler}>
      <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
      <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
      <input type='password' onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"></input>
      
        <button type="submit">signup</button>
        
    </form>
      { wrongCredentials && <p className="text-red-500"> Wrong Credentials! Please try again. </p> }
    </div>
  )
}

export default Signup
