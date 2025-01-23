import React from "react";
import Header from "./Header";
import FrontPage from "./Frontpage"
import Features from "./Features";
import Newfeatures from "./NewFeatures";
import Footer from "./Footer";
import Techsageltd from "./Techsageltd";
import Kitboxes from "./KItboxes";
import Techsagework from "./TechsageWork";
// import Signup from "./Signup";

export default function Home(){

    return(
        <div className=" w-full h-full inset-0">
            <Header></Header>
            <FrontPage></FrontPage>
            <Kitboxes></Kitboxes>
            <Features></Features>
            <Newfeatures></Newfeatures>
            <Techsagework></Techsagework>
            <Techsageltd></Techsageltd>
            {/* <Signup></Signup> */}
            <Footer></Footer>
            
        </div>
    )
}