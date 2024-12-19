// In this we are creating animated files and other thing

import React from "react";
import bluewhite from "./bluewhite.jpg";
import skywhite from "./skywhite.jpg";
import bubbles from "./bubbles.jpg";
import bluclouds from "./bluecloud.jpg";

export default function Features() {

    

    return (
        <div className="min-h-screen mt-52 ">
            <div className=" w-[65%] h-[400px] overflow-hidden  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-badge mx-auto border-[8px] bg-cover bg-center border-[white]"
            style={{ backgroundImage: `url(${bluclouds})` }}
            >

                {/* now to create what we will offer section */}
                <div className="border-[4px] flex justify-center items-center border-[white] rounded-badge bg-[#2ea0f2] m-10 mx-auto h-[55px]  w-[35%]">
                    <h1 className="text-xl">What we will offer</h1>

                </div>

                <div className="mx-auto flex justify-center  ">
                    <h1 className="font-serif text-4xl"> What Skills Your Kid will learn</h1>
                </div>

                {/* for skills */}
                <div className="grid   grid-cols-3 gap-5 p-4 animate-slideInLeft">



                    <h1 className="bg-white border-2  hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg   ">Robotics</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Machine Learning </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold  ">Artificial Intelligience</h1>

                </div>
                <div className="grid  grid-cols-3 gap-5 p-4 animate-slideInRight">



                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Arduino </h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold text-lg ">Coding Skills</h1>
                    <h1 className="bg-white border-2 hover:scale-90 hover:bg-blue-400 border-gray-200 rounded-3xl px-6 py-3 shadow-md text-gray-800 font-semibold  ">Working with Robots</h1>

                </div>

                

                



            </div>

            <button className=" rounded-full mt-12 mx-auto items-center justify-center flex text-white h-[50px] w-[40%] text-[20px]  bg-[#3084F2] hover:bg-sky-500 hover:scale-90">Get Your First Free Workshop</button>




        </div>





    )
}