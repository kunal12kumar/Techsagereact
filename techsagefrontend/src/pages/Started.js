// in this Cod with Started code
import React from "react";
import { Link } from "react-router-dom";
import correct from "../image/correct-30.png";
import bluewhite from "../image/bluewhite.jpg";
import skywhite from "../image/skywhite.jpg";
import bubbles from "../image/bubbles.jpg";
import bluclouds from "../image/bluecloud.jpg";


export default function Started() {

    return (
        <div className=" bg-cover bg-center font-poppins py-4 sm:min-h-screen border-[5px] sm:gap-10 border-white rounded-[34px] sm:mb-20 w-[90%] sm:w-[70%] flex flex-col mx-auto justify-center items-center ]"
        style={{ backgroundImage: `url(${skywhite})` }}>
            <h1 className=" text-3xl text-center sm:text-5xl font-semibold">Get Started With Techsage</h1>

            <h1 className="text-lg text-center m-1 sm:text-xl font-normal">Ready to advance your skills ? Sign up now and start your learning  journey  with us</h1>

            <div className="grid md:grid-cols-3 gap-7 mt-6">
                <div className=" flex flex-row border-[3px] p-2 w-full h-[50px] border-[#f6f4f4] rounded-full justify-center bg-white items-center">
                    <img src={correct}></img>
                    <h1>Finish workshop free</h1>

                </div>

                <div className=" flex flex-row border-[3px] w-full h-[50px] border-[#f6f3f3] rounded-full justify-center bg-white items-center">
                    <img src={correct}></img>
                    <h1>Exclusive content</h1>

                </div>

                <div className=" flex flex-row border-[3px] w-full h-[50px] border-[#f1eded] rounded-full justify-center bg-white items-center">
                    <img src={correct}></img>
                    <h1>Expert support</h1>

                </div>
            </div>

            <Link to={'/contactus'}><button className="flex border-[3px] mt-12 font-semibold text-2xl hover:scale-95 w-[300px] h-[60px] bg-[#2874f7] border-[white] rounded-full justify-center items-center">Get Started Now</button></Link>

        </div>
    )
}