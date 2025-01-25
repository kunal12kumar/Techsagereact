import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import FrontPage from "./Frontpage"
import Features from "./Features";
import Newfeatures from "./NewFeatures";
import Footer from "./Footer";
import Techsageltd from "./Techsageltd";
import Kitboxes from "./KItboxes";
import Techsagework from "./TechsageWork";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
// import Signup from "./Signup";

export default function Home(){

    // if notification comes then this happens
    const location = useLocation();

    // useEffect(() => {
    //     if (location.state?.message) {
    //         toast.success(location.state.message);
    //         console.log(location.state.message)
    //     }
    // }, [location.state]);


    return(
        <div className=" w-full h-full inset-0">
            <ToastContainer></ToastContainer>
            <Header></Header>
            <FrontPage></FrontPage>
            <Kitboxes></Kitboxes>
            <Techsagework></Techsagework>
            <Features></Features>
            <Newfeatures></Newfeatures>
            
            {/* <Signup></Signup> */}
            <Footer></Footer>
            
        </div>
    )
}