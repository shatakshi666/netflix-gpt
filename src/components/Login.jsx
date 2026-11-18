import { useState } from "react";
import Header from "./Header.jsx"


const Login = () => {
  const [isSignUp , setSignUp] = useState (false);
  const handleSignup = () => {
    setSignUp(!isSignUp);
  }
  return (
    <>
   
    <div >
      
     <Header/>
    
     </div>
    
    <div className="z-50 bg-linear-to-bl flex flex-col justify-center items-center h-screen bg-black">
       <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_large.jpg" alt = "bg-logo" className="bg-gray-900 opacity-75 brightness-100  absolute block"/>
     
     
     
    <form className="z-2 bg-black px-4 my-2 opacity-70 border-2 rounded-b-sm">
      <div className = " my-10  flex flex-col z-10 justify-center">
        <label className="text-white text-xl text-left px-4 py-4">{!isSignUp? "Sign In" : "Sign Up"}</label>
        { isSignUp && <input id="name" type = "text" placeholder="Name" className=" m-4 border-amber-50 border-2  px-4 py-4  placeholder-white text-left"/>}
        <input id="email" type = "text" placeholder="Email Address" className=" m-4 border-amber-50 border-2  px-4 py-4  placeholder-white text-left"/>
        <input id="password" type = "text" placeholder=" Password" className=" m-4 border-amber-50 border-2  px-4 py-4  placeholder-white text-left"  />
        <button className=" m-4 border-2 rounded-2xl px-4 py-4  text-white bg-red-800" > {!isSignUp? "Sign In" : "Sign Up"} </button> 
        <p className="text-white text-left cursor-pointer text-sm px-4  py-4" onClick={handleSignup}>{!isSignUp ? "Not a member ? Sign up for membership." : "Already a member ? Sign in."} </p>
      </div>
      </form>
     
    </div>

    
    </>
    
  )
}

export default Login;