import React from 'react'
import "./signup.css";
const Signup = () => {
  return (
    <>
    <div className='fixed bottom-0 signup_bar text-xs px-4 py-1 mx-2 font-semibold flex justify-between'>
      <div>
        <p className=" uppercase">Preview of Spotify</p>
        <p className="font-semibold">
          Signup to get unlimited songs and podcasts with occasional 
          ads. No credit card needed.
          </p>
      </div>
    <button className="rounded-full text-black mt-4 px-4 py-0  bg-white font-semibold">
      Signup for free
      </button>
    </div>
    </>
  )
}

export default Signup
