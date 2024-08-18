import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoLibrarySharp} from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FiGlobe } from 'react-icons/fi';
import Signup from './Signup';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="w-1/4 fixed left-0 top-0 sidebar" >
      <div className="nav secondary_bg rounded-lg p-6">
        <div className="flex item-center gap-4">
        <FaHome className="font bold text-xl" />
          <span>Home</span>
         
        </div>
        <div className="flex mt-4 item-center gap-4">
        <FaSearch className="font bold text-xl" />
          <span>Search</span>
         
        </div>
      </div>
      <div className="mt-2 secondary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-6 item-center gap-4">
          <div className="flex gap-2 items-center">
        <IoLibrarySharp className="font bold text-xl" />
          <span className="text-xs font-bold">Your Library</span>
          </div>

          <button className="hover:bg-black/25 rounded-[50%] p-2">
          <FaPlus className="font bold text-sm" />
          </button>
      
        </div>
        <div className="your_library">
                    <div className="leading-8 mt-1 tertiary_bg rounded-lg py-6 px-4">
                        <p className="font-bold text-xs">Create your first playlist</p>
                        <p className="font-semibold text-xs">
                            It's easy, we'll help you
                        </p>
                        <button className="rounded-full text-black text-xs mt-4 px-4 py-1.5 bg-white font-semibold">
                            Create playlist
                        </button>
                    </div>
                    <div className="leading-8 mt-4 tertiary_bg rounded-lg py-6 px-4">
                        <p className="font-bold text-xs">
                            Let's find some podcasts to follow
                        </p>
                        <p className="font-semibold text-xs">
                            We'll keep you updated on new episodes
                        </p>
                        <button className="rounded-full text-black text-xs mt-4 px-4 py-1.5 bg-white font-semibold">
                            Browse Podcast
                        </button>
                    </div>
                </div> 
       {/*} <div className="your_library">
        <div className=" leading-8 mt-1 teritary_bg rounded-lg py-1 px-2">
         <p className="font-bold">Create your first Playlist</p>
         <p className="font-semibold">It's easy we'll help you</p>
      <button className="rounded-full  text-black mt-4 px-4 py-0 bg-white font-semibold">
                Create Playlist
      </button>
        
      </div>
      </div>
      </div>
      <div className="your_library">
      <div className=" leading-8 mt-2 secondary_bg rounded-lg p-2">
        <div className="flex justify-between mb-4 item-center gap-4">
         
        </div>
        <div className="your_library leading-8 mt-1 teritary_bg rounded-lg py-1 px-2">
         <p className="font-bold">Let's find some Podcast to follow</p>
         <p>We'll keep you updated on new episodes</p>
      <button className="rounded-full  text-black mt-4 px-4 py-0 bg-white font-semibold">
            Browse Podcast
      </button>
      </div> 
      </div> */}
      </div>
      <div className="mt-4 px-4 py-1 gap-1 flex flex-wrap">
        <a className="text-xs text-gray-400 mx-2" href="#">Legal</a>
        <a className="text-xs text-gray-400 mx-2" href="#">Safety & Privacy center</a>
        <a className="text-xs text-gray-400 mx-2" href="#">Privacy Policy</a>
        <a className="text-xs text-gray-400 mx-2" href="#">Cookies</a>
        <a className="text-xs text-gray-400 mx-2" href="#">About Ads</a>
        <a className="text-xs text-gray-400 mx-2" href="#">Accessibilty</a>
        <a className="text-xs text-gray-400 mx-2" href="#">Cookies</a>

      </div>
      <button className="mt-3 text-xs mx-8 border-white border rounded-full flex gap-1 px-3 py-1 item-center text-white">
         <FiGlobe  className="mt-0.5"/>
       <span className="text-white font-bold">English</span>
       </button>

       {/*<Signup />  */}
      
    </div>

  )
}

export default Sidebar
