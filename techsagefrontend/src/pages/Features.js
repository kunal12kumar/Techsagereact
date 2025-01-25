// In this we are creating animated files and other thing

import React from "react";
import { Link } from "react-router-dom";
import bluedot from "../image/bluedot.png";


import sykwhite from "../image/skywhite.jpg";



export default function Features() {

    

    return (
        <div className=" bg-white pt-20 ">
          
            <div className=" w-[90%]  sm:w-[100%] sm:h-[400px] overflow-hidden  sm:mx-auto ml-8     mx-auto  bg-cover "
            style={{ backgroundImage: `url(${bluedot})` }}
            >

                {/* now to create what we will offer section */}
                

                <div className="mx-auto flex justify-center  ">
                    <h1 className=" text-2xl text-white sm:text-4xl mt-14 font-urbanist  font-semibold"> What you will Learn?</h1>
                </div>

                {/* for skills */}

                <div className=" w-[70%] mx-auto">
                <div className="grid  mt-8  mb-4   sm:grid-cols-3 gap-4 sm:gap-16 sm:p-4 ">



                    <h1 className=" text-white border-[0.5px]    bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-6 sm:py-3 shadow-md  font-urbanist  text-lg flex justify-center items-center  ">Electronics Fundamentals</h1>
                    <h1 className=" text-white border-[0.5px]   bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-6 sm:py-3 shadow-md  font-urbanist  text-lg text-center ">Hands-on Robotics </h1>
                    <h1 className=" text-white border-[0.5px]   bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-3 sm:py-3 shadow-md  font-urbanist flex text-lg justify-center items-center  ">Artificial Intelligience</h1>

                </div>
                <div className="grid   sm:grid-cols-3 sm:gap-16 gap-4 sm:p-4 pb-6">



                    <h1 className=" text-white border-[0.5px]   font-urbanist bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-2 flex justify-center items-center shadow-md   text-lg text-center ">Decision Making  </h1>
                    <h1 className=" text-white border-[0.5px]   font-urbanist bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-6 sm:py-3 shadow-md  text-center text-lg ">Coding Essentials</h1>
                    <h1 className=" text-white border-[0.5px]  font-urbanist bg-[#000879] border-[#E5E5FF] rounded-2xl  sm:px-6 flex justify-center items-center shadow-md    ">Problem Solving</h1>

                </div>

                </div>

                

                



            </div>

            



        </div>





    )
}