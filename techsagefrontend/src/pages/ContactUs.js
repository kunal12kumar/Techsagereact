// When the visitiors want to contact with us then by this page they will submit there information 
// in this we will ask for Name , Mobile No. , Email
// and there is also section where they can text to us what they want to ask or and send us 
// and also give our contact no and eamil for contact 


import React, { useEffect, useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Header from "./Header";





export default function ContactUs() {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();




    // to udate the all data 
    const [contactusdetails, setcontactusdetails] = useState(
        {
            name: '',
            email: '',
            mobileno: '',
            query: ''
        }
    );

    //    useEffect(()=>{
    //     if (!token) {
    //         navigate("/log_in"); // Redirect to login if no token found
    //         return;
    //     }
    //    },[navigate])



    // by this function we are updating our data by each later
    const updatedata = (event) => {
        let olddata = { ...contactusdetails };
        let inputname = event.target.name;
        let inputvalue = event.target.value;
        olddata[inputname] = inputvalue;
        setcontactusdetails(olddata);
        console.log(olddata)

    }

    // now checking for whether use is already verified or not 
    const handelSubmit = async (event) => {

        event.preventDefault();
        const API_BASE_URL = process.env.REACT_APP_API_URL

        try {

            const response = await axios.post(`${API_BASE_URL}/Rcontactus/contactussave`, {
                name: contactusdetails.name,
                email: contactusdetails.email,
                mobileno: contactusdetails.mobileno,
                query: contactusdetails.query
            });
            console.log(response);

            if (response.status === 200) {
                toast.success(response.data.message);
            }

            setcontactusdetails(
                {
                    name: '',
                    email: '',
                    mobileno: '',
                    query: ''
                }
            )

        } catch (error) {


            toast.error(error.response?.data?.message || 'Failed to save data');
            console.log(error);

        }

    }





    return (

        <div>
            <Header></Header>

            <div className="flex font-poppins justify-center items-center min-h-screen bg-gray-100">
                <ToastContainer></ToastContainer>
                <div className="bg-white mt-32  p-6   rounded-lg shadow-lg w-[50%]">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Contact  Us</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                onChange={updatedata}

                                name="name"
                                value={contactusdetails.name}
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                onChange={updatedata}
                                name="email"
                                value={contactusdetails.email}
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
                                onChange={updatedata}
                                name="mobileno"
                                value={contactusdetails.mobileno}
                                type="MobileNo"
                                id="MobileNo."
                                placeholder="MobileNo."
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="w-full max-w-full mb-4 bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write Your Text</h2>
                            <textarea
                                onChange={updatedata}
                                type="text"
                                name="query"
                                value={contactusdetails.query}


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
                        > Submit
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-12" />
                        </svg> */}
                        </button>
                    </form>

                </div>
            </div>
        </div>


    )

}