// in this Cod with Started code
import React from "react";
import correct from "./correct-30.png"


export default function Started() {

    return (
        <div className="min-h-screen border-[5px] gap-10 border-white rounded-[34px] mb-20 w-[70%] flex flex-col mx-auto justify-center items-center ]">
            <h1 className="text-5xl font-semibold">Get Started With Techsage</h1>

            <h1 className="text-xl font-normal">Ready to advance your skills ? Sign up now and start your learning  journey  with us</h1>

            <div className="grid grid-cols-3 gap-7 mt-6">
                <div className=" flex flex-row border-[3px] w-[200px] h-[50px] border-[white] rounded-full justify-center items-center">
                    <img src={correct}></img>
                    <h1>Finish workshop free</h1>

                </div>

                <div className=" flex flex-row border-[3px] w-[200px] h-[50px] border-[white] rounded-full justify-center items-center">
                    <img src={correct}></img>
                    <h1>Exclusive content</h1>

                </div>

                <div className=" flex flex-row border-[3px] w-[200px] h-[50px] border-[white] rounded-full justify-center items-center">
                    <img src={correct}></img>
                    <h1>Expert support</h1>

                </div>
            </div>

            <button className="flex border-[3px] mt-12 font-semibold text-2xl hover:scale-95 w-[300px] h-[60px] border-[white] rounded-full justify-center items-center">Get Started Now</button>

        </div>
    )
}