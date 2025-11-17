import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import { Navigate } from "react-router-dom";
import Otp from "./components/Otp";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [copyEmail, setcopyEmail] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <div className="h-screen text-[black]  w-screen flex flex-col justify-center items-center gap-10 bg-[gray]">


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} copyEmail={copyEmail} setcopyEmail={setcopyEmail}/>}></Route>
      <Route path="/dashboard" element={((isLoggedIn || isSignedUp) || otpVerified)? <DashBoard />: <Navigate to="/" replace /> }/>
      <Route path="/signup/otp" element={ copyEmail !=="" ? <Otp copyEmail={copyEmail} setcopyEmail={setcopyEmail} otpVerified={otpVerified} setOtpVerified={setOtpVerified} /> : <Navigate to="/signup" replace />}/>
    </Routes>
    </div>
  );
}

export default App;
