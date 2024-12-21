import React from "react";
import freeicon from "./freeicon";
import robot from "./robot.gif";
import ai from "./Ai.png";
import code from './code.png';
import support from './support.png';
import collaboration from './collaboration.png';
import bluewhite from "./bluewhite.jpg";
import skywhite from "./skywhite.jpg";
import bubbles from "./bubbles.jpg";
import bluclouds from "./bluecloud.jpg";

export default function Newfeatures() {

    return (
        <div className=" py-16 mih-h-screen">

            {/* section for new features */}

            <div className=" w-[30%] h-[60px] flex justify-center items-center border-[3px ] mx-auto border-white bg-slate-300 rounded-full  ">
                <h1 className="text-2xl text-center font-poppins"> Features</h1>
                

            </div>
            <div className="text-center m-12">
                <h2 className="text-3xl font-bold font-poppins">Why choose us?</h2>
                <p className="text-gray-600 mt-2 font-lato">
                    Start your robotics journey with our interactive workshop
                </p>
            </div>
            
            <div className="w-[70%] h-auto grid grid-cols-2 gap-y-12 justify-items-center  mx-auto font-poppins">

                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center  gap-[30px] hover:origin-top-left hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={freeicon} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Free Workshop</h1>

                    <h1 className="text-2xl font-semibold text-[#594949]">Helping Focusing </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center gap-[30px] hover:origin-top-left hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={robot} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Hands-on robotics</h1>

                    <h1 className="text-2xl font-semibold text-center text-[#594949]">Students will make real working robots </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center gap-[30px] hover:origin-top-right hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={ai} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Artificial intelligence</h1>

                    <h1 className="text-2xl text-center font-semibold text-[#594949]">Learn AI from real world problems </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center  gap-[30px] hover:origin-top-right hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={code} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Well documented code</h1>

                    <h1 className="text-xl font-semibold text-center text-[#594949]">Get access to all the codes in our documentation anytime </h1>

                </div>

                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center gap-[30px] hover:origin-origin hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={support} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">24/7 technical support</h1>

                    <h1 className="text-2xl text-center font-semibold text-[#594949]">Get technical help anytime anwhere </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-blue-400 justify-center items-center bg-cover bg-center  gap-[30px] hover:origin-top-origin hover:rotate-6 "
                style={{ backgroundImage: `url(${bubbles})` }}>
                    <img src={collaboration} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Collaboration</h1>

                    <h1 className="text-xl font-semibold text-center text-[#594949]">Students will learn collaborative teamplay by making projects </h1>

                </div>



            </div>
        </div>
    )
}