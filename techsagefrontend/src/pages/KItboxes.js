// This component contain the Kit boxes infromation and the projects which can be developed by that kit baoxes

import React from "react";
import curveline from "../image/curved line.png"
import minibox from "../image/boxmini1.png"
import arrow from "../image/arrow1.PNG"
import wifi from "../image/wifi.png";
import taxi from "../image/taxi_1f695 (1).png"
import wireless from "../image/wireless_1f6dc.png";
import bluethooth from "../image/bluetooth.png";
import automobile from "../image/automobile_1f697.png";
import boxplus from "../image/Bigbox.png";
import orangearrow from "../image/orangearrow.png";
import neworange from "../image/neworange.PNG"
import bulb from "../image/bulb.png";
import ambulance from "../image/ambulancelight.png";
import traffic from "../image/traffic.png";
import lock from "../image/lock.png";
import dragon from "../image/dragon.png";


import "./animation.css"
import { Link } from "react-router-dom";








export default function Kitboxes() {

    return (

        // IN this we will create two boxes when we click on that box it will open with containg the list of all projects that can be build by that projects




        <div className="min-h-screen bg-white ">
            {/* first box having  Name : Innovator Box Mini*/}
            <div className="flex flex-row mx-auto  gap-2 justify-center">

                <h1 className="text-2xl  sm:text-5xl font-urbanist  font-[900] rounded-full mt-20  text-black  sm:ml-0 ">Learn Robotics With</h1>
                <span className=" flex flex-col text-2xl sm:text-5xl font-[900] font-urbanist rounded-full mt-20 text-black  sm:ml-0"> Innovator Box
                    <img src={curveline} className="sm:w-full w-[100%]    h-[40px] " />


                </span>




            </div>

            <div className="flex sm:flex-row flex-col ml-8 sm:ml-0 min-w-full gap-20 justify-center mt-10" >

                <div className=" w-[90%] sm:w-[25%]">
                    <div className="border-[3px] rounded-2xl h-[700px]  border-[#3C315B] bg-cover bg-[#F3F1FC]   "
                    >
                        {/* <input type="checkbox" /> */}
                        <div className=" text-xl  font-medium mx-auto">

                            <h1 className="text-3xl flex mt-4 font-urbanist text-[#  text-[#3C315B]3C315B] font-[700] justify-center items-center">Innovator Box Mini </h1>
                            <img
                                src={minibox}
                                alt="Innovator Box Mini"
                                className="rounded-lg mx-auto ml-4 w-[80%] flex justify-center mb-4"
                            />

                            <div className="text-center mb-4">
                                <h2 className="text-2xl font-[900]  font-urbanist text-[#3C315B]  "><span className="text-[red] font-urbanist font-bold">5+</span> Cool Projects</h2>
                                <p className="text-[#3C315B] font-[900] text-[14px] font-urbanist">with step-by-step tutorials</p>
                            </div>

                            <div className="flex justify-center mb-4">
                                <button className="bg-blue-500 font-urbanist  w-[43%] font-bold text-2xl text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                    Buy now
                                </button>
                            </div>


                            <img src={arrow} className=" relative bottom-28  w-[25%] h-[120px] " />



                        </div>

                        <div className="  mx-2 rounded-2xl relative bottom-28 ">
                            <ul className="space-y-2 font-outfit px-8 font-[500] ">
                                <li className="flex items-center">
                                    <img src={bulb} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2  text-[#3C315B] ">LED Control Using ESP32</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={traffic} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#3C315B] ">Smart Traffic & Lighting System</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={lock} alt="WiFi Icon" className="w-5 mx-1 h-5" /> 
                                    <span className="ml-2 text-[#3C315B] ">Laser Tripwire Security System</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={ambulance} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#3C315B] ">Proximity Alert Display</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={dragon} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#3C315B] ">Dino Game on LCD</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={wireless} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#3C315B] ">Smart Light Control using Wi-Fi</span>
                                </li>
                            </ul>






                        </div>






                    </div>
                    <div>



                    </div>
                </div>


                <div className=" w-[90%]  sm:w-[30%]">

                    <div className=" border-[3px] rounded-2xl h-[880px] sm:h-[900px] border-[#470006] bg-cover bg-[#FFDADD]   "
                    >
                        {/* <input type="checkbox" /> */}
                        <div className=" text-xl w-full  font-medium mx-auto">

                            <h1 className="text-3xl flex mt-4 font-urbanist text-[#470006] font-[900] justify-center items-center">Innovator Box Plus</h1>
                            <img
                                src={boxplus}
                                alt="Innovator Box Mini"
                                className=" rounded-lg mx-auto ml-4 w-[80%] flex justify-center mb-4"
                            />

                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-[900] font-urbanist text-[#470006]  "><span className="text-[red] font-urbanist font-bold">10+</span> Cool Projects</h2>
                                <p className=" font-urbanist text-[#470006] font-[900] text-[19px] ">with step-by-step tutorials</p>
                            </div>

                            <div className="flex justify-center mb-4">
                                <button className="bg-blue-500 font-urbanist  w-[43%] text-white py-2 font-bold text-2xl px-4 rounded-full hover:bg-blue-600">
                                    Buy now
                                </button>
                            </div>


                            <img src={neworange} className=" relative bottom-28 mx-2  w-[20%] h-[120px] " />





                        </div>
                        <div className="  mx-2 relative bottom-28 px-10 rounded-2xl ">
                            <ul className="space-y-2 font-outfit  font-[500] text-[#470006] ">
                                <li className="flex items-center">
                                    <img src={bulb} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">LED Control Using ESP32</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={traffic} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">Smart Traffic & Lighting System</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={lock} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">Laser Tripwire Security System</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={ambulance} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">Proximity Alert Display</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={dragon} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">Dino Game on LCD</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={wireless} alt="WiFi Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006]">Smart Light Control using Wi-Fi</span>
                                </li>
                               
                                <li className="flex items-center">
                                    <img src={automobile} alt="Car Icon" className="w-5 mx-1  h-5" />
                                    <span className="ml-2 text-[#470006] font-[700]">Line Follower Car</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={taxi} alt="Obstacle Car Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006] font-[700]">Object Avoidance Car</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={wifi} alt="RC WiFi Car Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006] font-[700]">RC car using Wi-Fi</span>
                                </li>
                                <li className="flex items-center">
                                    <img src={bluethooth} alt="Bluetooth Icon" className="w-5 mx-1 h-5" />
                                    <span className="ml-2 text-[#470006] font-[700]">RC car using Bluetooth</span>
                                </li>
                            </ul>

                        </div>
                    </div>


                </div>

                {/* second box having Name: Innovator Box Plus */}



            </div>
        </div>





    )
}