import React from "react";
import Header from "./Header";
import FrontPage from "./Frontpage"
import Features from "./Features";
import Newfeatures from "./NewFeatures";
import Footer from "./Footer";
import Started from "./Started";

export default function Home(){

    return(
        <div className=" w-full h-full">
            <Header></Header>
            <FrontPage></FrontPage>
            <Features></Features>
            <Newfeatures></Newfeatures>
            <Started></Started>
            <Footer></Footer>
            
        </div>
    )
}