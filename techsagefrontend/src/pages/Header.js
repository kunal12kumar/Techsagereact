import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import loginuser from "../image/white-login-user.png"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function Header() {
    const Navigate = useNavigate();
    const islogedin = localStorage.getItem("token")

    return (

        // creating header 
        <div className="flex justify-around p-2  w-[98%] sm:w-[70%]   rounded-full z-[4] mx-auto inset-x-0 font-clash fixed mt-8 bg-zinc-800">

            <div className="drawer ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn bg-[black] border-[black] btn-primary rounded-full drawer-button"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white rounded-lg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg></label>
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-black "></label>
                    <ul className="menu bg-black  flex justify-center text-white  text-2xl  min-h-full w-[320px]  gap-2">
                        {/* Sidebar content here */}
                        {/* <img className="h-[300px] " src={logo}></img> */}

                        <Link to={'/profile'}><li className="hover:bg-base-300 rounded-lg p-2"> Profile</li></Link>

                        <Link to={'/contactus'}><li className="hover:bg-base-300 rounded-lg p-2">ContactUs</li></Link>


                        <Link to={'/log_in'}><li className="hover:bg-base-300 rounded-lg p-2">Log In</li></Link>
                        <Link to={'/'}><li className="hover:bg-base-300 rounded-lg p-2">About Us</li></Link>
                        <Link to={'/kitboxes'}><li className="hover:bg-base-300 rounded-lg p-2">Kit Boxes</li></Link>
                        <Link to={'/log_out'}><li className="hover:bg-base-300 rounded-lg p-2"> Log Out</li></Link>





                    </ul>
                </div>
            </div>
            <div className="mx-2">
                <Link to={'/'}><h1 className="  font-urbanist font-[800]  text-white text-4xl">Techsage</h1></Link>
            </div>


            <div className="text-xl hover:scale-110 justify-center  flex items-center">
                {islogedin ? (
                    <Link to="/profile"><h1 className="btn btn-md border-[#3285FF] hover:bg-[#3285FF] bg-[#3285FF] rounded-full  w-[110px]" >Profile</h1></Link>
                ) : (
                    <div className="dropdown dropdown-end ">
                        <Link to={'/signup'}><div tabIndex={0} role="button" className="btn font-urbanist text-white text-xl  btn-md  border-[#3285FF] hover:bg-[#3285FF] bg-[#3285FF] rounded-full  w-[110px] ">
                            {/* <div className="w-4 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                           
                        </div> */}

                            Sign Up
                        </div></Link>

                    </div>
                    // <Link to={'/sign_up'}><img className=" h-10 w-10 mt-1 " src={loginuser}></img></Link>
                )}





            </div>

        </div>
    )
}