import React from "react";
import freeicon from "../image/freeicon";
import robot from "../image/robot.gif";
import ai from "../image/Ai.png";
import code from '../image/code.png';
import support from '../image/support.png';
import collaboration from '../image/collaboration.png';

import "./animation.css";

export default function Newfeatures() {

    return (
        <div className=" py-8  mih-h-screen bg-white">

            {/* section for new features */}

            <div className="text-center m-12">
                <h2 className="text-3xl font-bold font-poppins">Why choose us?</h2>
                
            </div>
            
            <div className="sm:w-[70%] h-auto grid md:grid-cols-3 ml-8 sm:mx-auto gap-y-12 justify-items-center  mx-auto font-poppins">

                

                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px]  border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center  gap-[15px] sm:hover:scale-105   "
                >
                    <img src={freeicon} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Easy to Use</h1>

                    <h1 className="text-lg font-semibold text-center
                     text-[#594949]">Our kits are simple and fun for anyone to use.
                    </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center gap-[15px] sm:hover:scale-105"
                >
                    <img src={robot} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Learn by Doing</h1>

                    <h1 className="text-lg font-semibold text-center text-[#594949]">Build cool projects and learn new skills step by step.</h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center gap-[15px] sm:hover:scale-105"
                
                >
                    <img src={ai} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Great Value</h1>

                    <h1 className="text-lg text-center font-semibold text-[#594949]">High-quality kits at a best price.
                    </h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center  gap-[15px]  sm:hover:scale-105"
                
                >
                    <img src={code} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold">Made for Everyone</h1>

                    <h1 className="text-lg font-semibold text-center text-[#594949]">Perfect for beginners, kids, and curious minds of all ages.
                    </h1>

                </div>

                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center gap-[15px]  sm:hover:scale-105"
                
                >
                    <img src={support} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold"> Support at Every Step</h1>

                    <h1 className="text-lg text-center font-semibold text-[#594949]">Clear guides and friendly help to make things easy</h1>

                </div>


                <div className="w-[80%] h-[280px] flex flex-col border-[3px] rounded-[30px] border-white bg-[#c5d9f4] justify-center items-center bg-cover bg-center  gap-[15px]  sm:hover:scale-105"
                
                >
                    <img src={collaboration} className="pb-2"></img>

                    <h1 className="text-2xl font-semibold"> Prepare for the Future</h1>

                    <h1 className="text-lg font-semibold text-center text-[#594949]">Explore exciting technologies like robotics and AI </h1>

                </div>



            </div>
        </div>
    )
}