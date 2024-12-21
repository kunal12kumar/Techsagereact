import React from "react";
import arduino from './firstyou.jpg'
import roboticsvideo from '../video/techsagevideo.mp4'
import { Link } from "react-router-dom";


export default function FrontPage() {

    return (
        <div className="relative ">


            {/* from here written content of the page */}

            <div className=" min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-4">
                        Building Tomorrow's Innovators
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-gray-700">
                        Today
                    </h2>
                    <p className="text-lg md:text-xl font-poppins text-gray-500 mt-6">
                        Learn Robotics & AI from IIT & RGIPT Engineers for grades 7-12
                    </p>
                    {/* button for contact to our sevices */}

                    <Link to={'/contactus'}><button className=" rounded-full mt-12 text-white h-[50px] w-[40%] text-[20px]  font-poppins bg-[#3084F2] hover:bg-sky-500 hover:scale-90">Get Your First Free Workshop</button></Link>

                </div>
            </div>
            <div className="carousel w-[100%] mx-auto flex  min-h-screen   border-[2px] shadow-2xl ">
                <div id="slide5" className="carousel-item relative w-full">

                    <video
                        className="rounded-lg shadow-lg w-full  h-full"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={roboticsvideo} type="video/mp4" />

                    </video>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full">
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
                </div>


            </div>
        </div>


    )
}