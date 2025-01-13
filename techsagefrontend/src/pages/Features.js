// In this we are creating animated files and other thing

import React from "react";
import { Link } from "react-router-dom";

import bluclouds from "../image/bluecloud.jpg";
import sykwhite from "../image/skywhite.jpg";
import gridlines from "../image/gridpattern.jpg"


export default function Features() {

    

    return (
        <div className="min-h-screen mt-52 ">
          
            <div className=" w-[90%]  sm:w-[65%] sm:h-[400px] overflow-hidden   bg-gradient-to-r from-cyan-500 to-blue-500 rounded-badge mx-auto border-[8px] bg-cover bg-center border-[white]"
            style={{ backgroundImage: `url(${sykwhite})` }}
            >

                {/* now to create what we will offer section */}
                <div className="border-[4px] flex justify-center items-center border-[white] rounded-badge bg-[#2ea0f2] m-10 mx-auto h-[55px] w-[90%]  sm:w-[35%]">
                    <h1 className="text-xl  font-roboto">What we will offer</h1>

                </div>

                <div className="mx-auto flex justify-center  ">
                    <h1 className=" text-2xl sm:text-4xl font-Ubuntu font-semibold"> What Skills Your Kid will learn</h1>
                </div>

                {/* for skills */}
                <div className="grid font-Ubuntu    sm:grid-cols-3 gap-5 p-4 ">



                    <h1 className="bg-white border-2  hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-6 sm:py-3 shadow-md text-gray-800  text-lg flex justify-center items-center  ">Hand-On Robotics</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-6 sm:py-3 shadow-md text-gray-800  text-lg text-center ">Robotics Kits </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-3 sm:py-3 shadow-md text-gray-800 flex text-lg justify-center items-center  ">Artificial Intelligience</h1>

                </div>
                <div className="grid  font-poppins sm:grid-cols-3 gap-5 p-4 ">



                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-2 flex justify-center items-center shadow-md text-gray-800  text-lg text-center ">Project-based Learning </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-6 sm:py-3 shadow-md text-gray-800 text-center text-lg ">Coding Skills</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl  sm:px-6 flex justify-center items-center shadow-md text-gray-800   ">Working with Robots</h1>

                </div>

                

                



            </div>

            <Link to={'/contactus'}><button className=" rounded-full mt-12 mx-auto p-2 items-center justify-center flex text-white h-[50px] sm:w-[40%] sm:text-[20px]  bg-[#3084F2] hover:bg-sky-500 hover:scale-90 font-poppins">Get Your First Free Workshop</button></Link>




        </div>





    )
}