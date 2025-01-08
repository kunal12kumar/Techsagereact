import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";


export default function Header() {

    return (

        // creating header 
        <div className="navbar w-[70%]  rounded-full z-[4] mx-auto inset-x-0 font-clash fixed mt-8 bg-zinc-800">
            <div>
                <h1 className="text-white text-center px-4">logo</h1>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost font-roboto from-accent-content  text-white text-2xl">techsage</a>
            </div>
            <div className="flex gap-6 justify-between">
            <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn bg-[black] border-[black] btn-primary drawer-button"><svg
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
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                            <ul className="menu bg-[black] flex justify-center text-white  text-2xl  min-h-full w-[320px]  gap-2">
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
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn font-poppins btn-md w-[90px] rounded-full ">
                        {/* <div className="w-4 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                           
                        </div> */}

                        <Link to={'/signup'}>SignUp</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}