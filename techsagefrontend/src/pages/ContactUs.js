// When the visitiors want to contact with us then by this page they will submit there information 
// in this we will ask for Name , Mobile No. , Email
// and there is also section where they can text to us what they want to ask or and send us 
// and also give our contact no and eamil for contact 


import React, { useState } from "react";



export default function ContactUs() {

    // const [text, setText] = useState

    // const handleChange = (e) => {
    //     setText(e.target.value);
    // };

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Contact  Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="Name"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Mobile No.
                        </label>
                        <input
                            type="MobileNo"
                            id="MobileNo."
                            placeholder="MobileNo."
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    <div className="w-full max-w-lg mb-4 bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write Your Text</h2>
                        <textarea
                            type="text"
                            // value={text}
                            // onChange={handleChange}
                            
                            placeholder="Start typing here..."
                            className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        ></textarea>
                        {/* <p className="text-sm text-gray-500 mt-2">
                            Character count: {text.length}
                        </p> */}
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-12" />
                        </svg>
                    </button>
                </form>

            </div>
        </div>


    )

}