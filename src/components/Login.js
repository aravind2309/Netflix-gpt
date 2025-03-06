import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm= () =>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header/>
            <img className="absolute brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" alt="background"/>
            <form className="absolute w-3/12 p-12 bg-black my-36 left-0 right-0 mx-auto text-white items-center bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                  (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-black/80 border border-gray-500"></input>)
                }
                <input type="text" placeholder="Email address or Phone number" className="p-4 my-4 w-full bg-black/80 border border-gray-500"></input>
                <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-black/80 border border-gray-500"></input>
                <button className="p-2 my-4 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now":"Already registed? Sign in now"}</p>
            </form>
        </div>
    );
}
export default Login;