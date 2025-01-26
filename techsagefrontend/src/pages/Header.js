


// This component is for Header section 
import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

export default function Header() {
    const Navigate = useNavigate();
    const islogedin = localStorage.getItem("token")

    return (
        <div className=" ">
            {/* now the heading for the discount and others part */}

           
            {/* now for nav which contains the menu , cart ,sign in or sign up section  */}

            <div className="navbar flex  justify-around p-2  w-[98%] sm:w-[70%]   rounded-full z-[4] mx-auto inset-x-0 font-clash fixed mt-8 bg-zinc-800">
                <div className="navbar-start">
                    <div className="drawer ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle hover:scale-110" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn rounded-full bg-[black] border-[black] btn-primary drawer-button"><svg
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
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-black flex justify-center text-white text-2xl font-urbanist min-h-full w-80  gap-2">
                                {/* Sidebar content here */}
                                {/* <img className="h-[300px] " src={logo}></img> */}

                                <Link to={'/profile'}><li className="hover:bg-base-300 rounded-lg p-2">Profile</li></Link>
                                <Link to={'/contactus'}><li className="hover:bg-base-300 rounded-lg p-2">ContactUs</li></Link>
                                <Link to={'/log_in'}><li className="hover:bg-base-300 rounded-lg p-2">Log In</li></Link>
                                <Link to={'/aboutus'}><li className="hover:bg-base-300 rounded-lg p-2">About Us</li></Link>
                                <Link to={'/kitboxes'}><li className="hover:bg-base-300 rounded-lg p-2">Kitboxes</li></Link>
                                <Link to={'/log_out'}><li className="hover:bg-base-300 rounded-lg p-2">Logout</li></Link>





                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={'/'}><h1 className=" font-urbanist font-[800]  text-white text-4xl">Techsage</h1></Link>
                </div>
                <div className="navbar-end">

                    <div className=" flex gap-8 justify-between ">
                        {/* about us page */}

                        {/* <div className=" cursor-pointer hover:scale-110 text-xl justify-center flex items-center"><Link to={'/aboutus'}>AboutUs</Link></div> */}

                        {/* for sign in icon  */}
                        <div className=" hover:scale-110 justify-center font-urbanist flex items-center">
                            {islogedin ? (
                               <Link to="/profile"><h1 className="btn btn-md  border-[#3285FF] font-urbanist text-xl text-white hover:border-[#3285FF] hover:bg-[#3285FF] bg-[#3285FF] rounded-full  w-[110px]" >Profile</h1></Link>
                            ) : (
                                <Link to={'/signup'}><h1 className="btn btn-md font-urbanist text-xl text-white border-[#3285FF] hover:bg-[#3285FF] bg-[#3285FF] rounded-full  w-[110px]">sign up</h1></Link>
                            )}
                            

                        </div>
                       
                       
                    </div>
                </div>

            </div>
        </div>
    )
}