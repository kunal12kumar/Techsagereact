// This component contain the Kit boxes infromation and the projects which can be developed by that kit baoxes

import React from "react";
import sykwhite from "../image/bluewhite.jpg";
import gridlines from "../image/gridpattern.jpg";
import innovatorboxplus from "../image/innovator-box-plus.jpg";
import Header from "./Header";
import minikit from "../image/maxkit.jpg"


import "./animation.css"
import { Link } from "react-router-dom";








export default function Kitboxes() {

    return (

        // IN this we will create two boxes when we click on that box it will open with containg the list of all projects that can be build by that projects
        



        <div className="min-h-screen ">
            {/* first box having  Name : Innovator Box Mini*/}

            <h1 className=" text-2xl sm:text-5xl text-center font-semibold rounded-full mt-20 mx-auto items-center justify-center flex text-black ml-4 sm:ml-0 font-passion">Learn Robotics With Innovator Box</h1>

            <div className="flex sm:flex-row flex-col ml-8 sm:ml-0 min-w-full gap-10 justify-center mt-10" >

                <div className=" w-[90%] sm:w-[40%]">
                    <div className="border-[3px] rounded-2xl  border-[black] bg-cover bg-white   "
                    >
                        {/* <input type="checkbox" /> */}
                        <div className=" text-xl h-[250px] font-medium mx-auto">

                            <h1 className="text-3xl flex mt-4 justify-center items-center">Innovator Box Plus</h1>
                            <button className="border-[1px] w-[50%] text-center h-[40px] mx-auto items-center flex justify-center bg-[#3e6bdc] border-[black] mt-8 rounded-2xl py-4 text-2xl font-roboto hover:scale-90" >Buy now</button>
                            


                        </div>

                        <div className=" border-[1px] border-[black] m-2 rounded-2xl py-8">
                            <ul className="">
                                <h1 className="flex justify-center text-xl font-semibold mx-auto mb-2">Projects Includes In this box</h1>
                                <Link to={'/tutorial'}><li className="projectboxsmall">LED Control Using ESP32
                                </li></Link>
                                <li className="projectboxsmall">Smart Traffic & Lighting System</li>
                                <li className="projectboxsmall">Laser Tripwire Security System
                                </li>
                                <li className="projectboxsmall">Proximity Alert Display
                                </li>
                                <li className="projectboxsmall">Dino Game on LCD</li>
                                <li className="projectboxsmall">Smart Light Control using Wi-Fi</li>
                            </ul>






                        </div>






                    </div>
                    <div>
                        


                    </div>
                </div>


                <div className=" w-[90%] sm:w-[40%]">

                    <div className=" border-[3px] rounded-2xl border-[black] bg-cover bg-white   "
                    >
                        {/* <input type="checkbox" /> */}
                        <div className=" text-xl w-full h-[250px] font-medium mx-auto">

                            <h1 className="text-3xl flex mt-4 justify-center items-center">Innovator Box Plus</h1>
                            <button className="border-[1px] w-[50%] text-center h-[40px] mx-auto items-center flex justify-center bg-[#3e6bdc] border-[black] mt-8 rounded-2xl py-4 text-2xl font-roboto hover:scale-90" >Buy now</button>

                          
                            


                        </div>
                        <div className=" border-[1px] border-[black] m-2 rounded-2xl py-4">
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

                        </div>
                    </div>
                    
                    
                </div>

                {/* second box having Name: Innovator Box Plus */}
                


            </div>
            </div>


        


    )
}