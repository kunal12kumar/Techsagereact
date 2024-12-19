import React from "react";
import Header from "./Header";
import FrontPage from "./Frontpage"
import Footer from "./Footer";
import Features from "./Features";

export default function Home(){

    return(
        <div className=" w-full h-full">
            <Header></Header>
            <FrontPage></FrontPage>
            <Features></Features>
            
        </div>
    )
}