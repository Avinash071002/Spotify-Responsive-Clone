import React, {useState, useEffect} from 'react'
import './Login.css';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActor } from "../../states/Actors/UserActor";



const Login = () => {
  const [userDetails, setUserDetails] = useState({
     username:'',
        password:'',
        });
        const navigate = useNavigate();


        const loginUser = async (e) =>{
         e.preventDefault();
            
        const {password, username} = userDetails;
        let  d = JSON.stringify({
             password,     
             username});
   console.log(d);
         const res = await fetch("http://localhost:5000/api/user/login", { 
            method:"POST",
            headers:{
                "Content-Type": "application/json",

            },
            body: d,
            });

            const data = await res.json();
            if(data.success){
              console.log(data);
              toast.success(data.message);
              localStorage.setItem("token", JSON.stringify(data.token));
              dispatch(userActor(data.user));
              navigate("/");
            } else {
              toast.error(data.message);  
                }
            }
        
        };
       
        const onChange = (e) =>{

          setUserDetails({...userDetails, [e.target.name]: e.target.value});
         
            };
            useEffect(() => {
              if (isAuthenticated) {
                navigate("/");
              }
            }, []);   

  return (
    <>
      <header className="px-20 py-2">
        <div className="logo">
          <Link to= "/">
            <img src="/assets/white_logo.png" width={100} alt="" />
            </Link>
        </div>
      </header>
      <div className="container py-10 px-20">
        <div className="bg-black text-center py-10 text-center w-1/2 mx-auto">
      <h1 className="text-2xl font-semibold">Log in to Spotify</h1>
<div className="w-1/2 text-center mx-auto border border-white rounded-full text-white text-xs mt-4 px-5 py-1.5 font-semibold flex items-center justify-center space-x-2 bg-black-500 hover:bg-orange-600 cursor-pointer">
  <FaGoogle className="text-white" />
  <button className="focus:outline-none">Continue with Google</button>
</div>

             <div className="w-1/2 text-center mx-auto border border-white rounded-full text-white text-xs mt-4 px-5 py-1.5 font-semibold flex items-center justify-center space-x-2 bg-black-500 hover:bg-blue-600 cursor-pointer">
  <FaFacebook className="text-white" />
  <button className="focus:outline-none">Continue with Facebook</button>
</div>
                <div className="w-1/2 text-center mx-auto border border-white rounded-full text-white text-xs mt-4 px-5 py-1.5 font-semibold flex items-center justify-center space-x-2 bg-black-500 hover:bg-yellow-600 cursor-pointer">
              <FaApple className="text-white" />
            <button className="focus:outline-none">Continue with Apple</button>
      </div>
      <div className="w-1/2 text-center mx-auto border border-white rounded-full text-white text-xs mt-4 px-5 py-1.5 font-semibold flex items-center justify-center space-x-2 bg-black-500 hover:bg-gray-600 cursor-pointer">
  
  <button className="focus:outline-none">Continue with phone number</button>
</div>


     <div className="border-b border-gray-600 w-3/4 mx-auto mt-7 mb-5"></div>
      <form onSubmit={loginUser}className="text-center mx-auto w-[65%] ">
        <div className="w-full text-left ml-8">
        <label htmlFor="username" className="text-xs font-bold inline-block mb-1">
          Email or username
          </label>
        <input type="text"
         name="username"
         value={userDetails.username}
         onChange={onChange}
          id="username" 
        placeholder="Email or username"
        className="bg-black w-3/4 rounded-md block border-0 border-gray-900 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 
        focus-within:ring-inset focus-within:ring-gray-600 sm:max-w-md py-2 text-xs" />
        </div>
   
        <div className="w-full text-left mt-1 ml-8">
        <label htmlFor="password" className="text-xs font-bold inline-block mb-1">
          Password
          </label>
        <input type="text"
         name="password"
          id="password"
          value={userDetails.password}
          onChange={onChange}
        placeholder="Password"
        className="bg-black w-3/4 rounded-md block border border-gray-900 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus:ring-white-600 outline-none
        focus-within:ring-inset focus-within:ring-gray-690 sm:max-w-md  py-2 text-xs" />
                </div>


 { /* to make the toggle of remember me */}
 
             

        <div className=" text-center mx-auto mt-10">
        <button className="w-3/4 rounded-full text-black hover:bg-green-400/90 text-xs py-1 bg-green-500 border border-green font-semibold">
                         Log In
                        </button>
        </div>
        <div className='w-full text-center py-4'>
        <Link to = "/password/forgot" className="text-xs font-bold hover:underline cursor-pointer px-5 py-1">
          Forget your password?
          </Link>
        </div>
  
      </form>
      <div className="border-b border-gray-600 w-3/4 mx-auto mt-5 mb-5"></div>
      <div>
      <p>
        <span className="text-xs font-semibold abc">
          Don't have an account?
          </span>
        <Link to="/signup" 
        className="text-xs font-bold hover:underline cursor-pointer -ml-6"
        >Signup for Spotify
        </Link>
        </p>
     </div>

      </div>
      </div>
      <div className="py-5 abc">
        <p className="text-xs font-semibold encore-text-marginal eng">This site is protected by reCAPTCHA and the Google <a href="/" className="hover:underline" target="/blank" >Privacy Policy</a>  and <a href="/" className="hover:underline" target="/blank">Terms of Service</a> apply.

        </p>
       
      </div>
    </>
  );

export default Login
