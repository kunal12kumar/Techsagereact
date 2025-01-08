// This component contain the Kit boxes infromation and the projects which can be developed by that kit baoxes

import React from "react";
import sykwhite from "../image/bluewhite.jpg";
import gridlines from "../image/gridpattern.jpg";
import { loadStripe } from '@stripe/stripe-js';


import "./animation.css"
import { Link } from "react-router-dom";

const stripePromise = loadStripe('your_stripe_publishable_key');






export default function Kitboxes() {

    return (

        // IN this we will create two boxes when we click on that box it will open with containg the list of all projects that can be build by that projects


        <div className="min-h-screen ">
            {/* first box having  Name : Innovator Box Mini*/}

            <h1 className="  text-5xl  rounded-full mt-12 mx-auto items-center justify-center flex text-white h-[50px] w-[30%] text-[20px]  bg-[#3084F2]  font-poppins">Innovator Box</h1>

            <div className="flex min-w-full gap-10 justify-center mt-10" >

                <div className="w-[40%]">
                    <div className="collapse border-[3px] border-[black] bg-cover bg-white hover:origin-top-origin hover:bg-[#aca7a7] "
                    >
                        <input type="checkbox" />
                        <div className="collapse-title h-[250px] text-xl font-medium mx-auto">

                            <h1 className="text-3xl flex justify-center items-center">Innovator Mini Box</h1>
                            <h1 className="text-2xl flex text-center justify-center items-center pt-4 text-dark ">Unbox Creativity, Build Your Dreams!</h1>

                        </div>

                        <div className="collapse-content border-[1px] border-[black] m-2 rounded-2xl py-4">
                            <ul className="">
                                <h1 className="flex justify-center text-xl font-semibold mx-auto mb-2">Projects Includes In this box</h1>
                                <Link to={'/tutorial'}><li className="projectbox">LED Control Using ESP32
                                </li></Link>
                                <li className="projectbox">Smart Traffic & Lighting System</li>
                                <li className="projectbox">Laser Tripwire Security System
                                </li>
                                <li className="projectbox">Proximity Alert Display
                                </li>
                                <li className="projectbox">Dino Game on LCD</li>
                                <li className="projectbox">Smart Light Control using Wi-Fi</li>
                            </ul>

                            <div>
                                <button className="border-[1px] w-[50%] text-center h-[40px] mx-auto items-center flex justify-center bg-[#3e6bdc] border-[black] mt-8 rounded-2xl py-4 text-2xl font-roboto hover:scale-90 "  >Buy now</button>


                            </div>




                        </div>




                    </div>
                </div>


                <div className="w-[40%]">

                    <div className="collapse border-[3px] border-[black] bg-cover bg-white hover:origin-top-origin hover:bg-[#aca7a7]  "
                    >
                        <input type="checkbox" />
                        <div className="collapse-title text-xl h-[250px] font-medium mx-auto">

                            <h1 className="text-3xl flex justify-center items-center">Innovator Box Plus</h1>
                            <h1 className="text-2xl flex text-center justify-center items-center pt-4 text-dark ">Open the Box, Ignite Innovation!</h1>


                        </div>
                        <div className="collapse-content border-[1px] border-[black] m-2 rounded-2xl py-4">
                            <ul>
                                <h1 className="flex justify-center text-xl font-semibold mx-auto mb-2 ">Projects Includes In this box</h1>
                                <li className="projectbox">LED Control Using ESP32
                                </li>
                                <li className="projectbox">Smart Traffic & Lighting System</li>
                                <li className="projectbox">Laser Tripwire Security System
                                </li>
                                <li className="projectbox">Proximity Alert Display
                                </li>
                                <li className="projectbox">Dino Game on LCD</li>
                                <li className="projectbox">Smart Light Control using Wi-Fi</li>
                                <li className="projectbox">Line Follower Car
                                </li>
                                <li className="projectbox">Object Avoidance Car
                                </li>
                                <li className="projectbox">RC car using Wi-Fi
                                </li>
                                <li className="projectbox">RC car using Bluetooth</li>



                            </ul>

                            <button className="border-[1px] w-[50%] text-center h-[40px] mx-auto items-center flex justify-center bg-[#3e6bdc] border-[black] mt-8 rounded-2xl py-4 text-2xl font-roboto hover:scale-90" >Buy now</button>
                        </div>
                    </div>
                </div>

                {/* second box having Name: Innovator Box Plus */}


            </div>


        </div>


    )
}