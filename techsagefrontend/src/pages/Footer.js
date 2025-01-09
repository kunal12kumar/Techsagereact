import React from "react";
import instagram from "../image/instagram-logo.png";
import facebook from "../image/facebook-logo.png";
import x from "../image/x-logo.png";
import linkedin from "../image/linkedin.png";

export default function Footer() {

    return (
        <footer className=" border-t-2 border-white py-8">
            <div className="container font-lato mx-auto gap-y-8 px-4 mb-8 flex flex-wrap justify-between items-center">
                {/* Email Section */}
                <div className="flex items-center bg-white  border-[2px] border-white w-[250px] h-[40px] rounded-badge mb-4 md:mb-0">
                    <a
                        href="mailto:support@techsage.in"
                        className="flex items-center text-xl font-semibold text-gray-800 hover:text-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12H8m8 0l-8-8m8 8l-8 8"
                            />
                        </svg>
                        support@techsage.in
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4  mb-8 md:mb-0">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <img src={x} alt="X" className="w-10 h-10" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <img src={facebook} alt="Facebook" className="w-10 h-10" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <img src={instagram} alt="Instagram" className="w-10 h-10" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                    </a>
                </div>

                {/* Links Section */}
                <div className="w-full flex flex-wrap justify-between text-sm text-gray-800">
                    <div className="w-1/3 md:w-auto mb-4 md:mb-0">
                        <h3 className="font-semibold text-2xl mb-2">Sections</h3>
                        <ul className="text-xl">
                            <li><a href="#" className="hover:text-blue-500">Benefits</a></li>
                            <li><a href="#" className="hover:text-blue-500">Features</a></li>
                           
                            
                           
                            <li><a href="#" className="hover:text-blue-500">Get Started</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3 md:w-auto mb-4 md:mb-0">
                        <h3 className="font-semibold  text-2xl mb-2">Company</h3>
                        <ul className="text-xl">
                           
                            <li><a href="#" className="hover:text-blue-500">Highlight</a></li>
                            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500">FAQ's</a></li>
                            
                        </ul>
                    </div>
                    <div className="w-1/3 md:w-auto">
                        <h3 className="font-semibold text-2xl mb-2">Pages</h3>
                        <ul className="text-xl">
                            <li><a href="#" className="hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}