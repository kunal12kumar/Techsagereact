import React from "react";

import roboticsvideo from '../video/techsagevideo.mp4'
import { Link } from "react-router-dom";
import robot1emoji from '../image/Robot-Emoji-PNG 1.png'


export default function FrontPage() {

    return (
        <div className="sm:relative ">


            {/* from here written content of the page */}

            <div className=" sm:absolute sm:z-[2] inset-0 sm:text-white sm:min-h-screen sm:py-28 pt-36  pb-8  flex items-center justify-center">
                <div className="text-center  ">
                    <h1 className="sm:text-[126px] text-5xl  ml-8 sm:flex  sm:ml-0 md:text-6xl font-lato mb-4  font-[900]  ">
                        <h1 className="sm:mt-6 font-urbanist ">Build Your First Robot </h1>
                        <img src={robot1emoji} className="sm:w-[120px] sm:ml-3 w-[100px]  mx-auto sm:h-[100px]"></img>
                    </h1>
                    
                    <p className="text-[18px] md:text-[18px] font-urbanist ml-8 sm:ml-0 mt-6">
                    Project-Based Learning Through Step-By-Step Guided Tutorials
                    </p>
                    {/* button for contact to our sevices */}

                    <Link to={'/kitboxes'}><button className=" rounded-full mt-12 text-white h-[50px] px-4 sm:w-[45%] text-[20px]  font-poppins bg-[#3084F2] hover:bg-sky-500 hover:scale-90">Get Your First Robotics Kit</button></Link>

                </div>
            </div>
            <div className="carousel w-[100%]   sm:min-h-screen    shadow-2xl ">
                <div id="slide5" className="carousel-item w-full">

                    <video
                        className="flex mx-auto inset-0 ml-6 sm:ml-0 rounded-xl sm:rounded-none shadow-lg w-full brightness-[0.4]  h-full"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={roboticsvideo} type="video/mp4" />

                    </video>

                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <iframe
                        width="1000"
                        height="full"
                        src={'https://www.youtube.com/embed/WGWsH_CD2D0'}
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <iframe
                        width="1000"
                        height="full"
                        src={'https://www.youtube.com/embed/gpXuEghz1zc'}
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <iframe
                        width="1000"
                        height="full"
                        src={'https://www.youtube.com/embed/aE_J7B-O4VQ'}
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">

                    <iframe
                        width="1000"
                        height="full"
                        src={'https://www.youtube.com/embed/yAV5aZ0unag'}
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div> */}


            </div>
        </div>


    )
}