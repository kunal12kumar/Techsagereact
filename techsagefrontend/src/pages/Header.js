import React from "react";

export default function Header() {

    return (

        // creating header 
        <div className="navbar w-[70%]  rounded-full z-[1] mx-auto inset-x-0 fixed mt-8 bg-zinc-800">
            <div>
                <h1 className="text-white text-center px-4">logo</h1>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost from-accent-content font-Instrument text-white text-2xl">techsage</a>
            </div>
            <div className="flex gap-6 justify-between">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle px-6  ">
                        <div className="indicator ">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 24 24"
                                style={{ fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: '' }}>
                                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                            </svg>

                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                        <li>
                            <a>
                                Profile   
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-md w-[90px] rounded-full ">
                        {/* <div className="w-4 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                           
                        </div> */}

                        SignUp
                    </div>
                    
                </div>
            </div>
        </div>
    )
}