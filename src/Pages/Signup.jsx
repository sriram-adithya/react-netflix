import React from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover object-top"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="///"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

        <div className="w-full fixed px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16" >
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>

              <form className="w-full flex flex-col py-4">
                <input className="p-3 my-2 bg-gray-700 rounded"
                type="email" 
                placeholder="Email" 
                autoComplete="email" 
                />
                <input className="p-3 my-2 bg-gray-700 rounded"
                type="password" 
                placeholder="Password" 
                autoComplete="current-password" 
                />
                  {/* this is for signup button */}
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">  
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2"/>
                    Remember me
                  </p> 
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">Already subscribed to Netflix?</span>
                  <Link to="/login" >Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
