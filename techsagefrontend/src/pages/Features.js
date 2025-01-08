// In this we are creating animated files and other thing

import React from "react";
import { Link } from "react-router-dom";

import bluclouds from "../image/bluecloud.jpg";
import sykwhite from "../image/skywhite.jpg";
import gridlines from "../image/gridpattern.jpg"


export default function Features() {

    

    return (
        <div className="min-h-screen mt-52 ">
          
            <div className=" w-[65%] h-[400px] overflow-hidden   bg-gradient-to-r from-cyan-500 to-blue-500 rounded-badge mx-auto border-[8px] bg-cover bg-center border-[white]"
            style={{ backgroundImage: `url(${sykwhite})` }}
            >

                {/* now to create what we will offer section */}
                <div className="border-[4px] flex justify-center items-center border-[white] rounded-badge bg-[#2ea0f2] m-10 mx-auto h-[55px]  w-[35%]">
                    <h1 className="text-xl font-roboto">What we will offer</h1>

                </div>

                <div className="mx-auto flex justify-center  ">
                    <h1 className=" text-4xl font-serif"> What Skills Your Kid will learn</h1>
                </div>

                {/* for skills */}
                <div className="grid font-roboto  grid-cols-3 gap-5 p-4 animate-slideInLeft">



                    <h1 className="bg-white border-2  hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg   ">Robotics</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Machine Learning </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold  ">Artificial Intelligience</h1>

                </div>
                <div className="grid  font-poppins grid-cols-3 gap-5 p-4 animate-slideInRight">



                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Arduino </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Coding Skills</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800   ">Working with Robots</h1>

                </div>

                

                



            </div>

            <Link to={'/contactus'}><button className=" rounded-full mt-12 mx-auto items-center justify-center flex text-white h-[50px] w-[40%] text-[20px]  bg-[#3084F2] hover:bg-sky-500 hover:scale-90 font-poppins">Get Your First Free Workshop</button></Link>




        </div>





    )
}