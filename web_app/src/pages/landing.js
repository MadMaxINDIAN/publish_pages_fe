import React from "react";
import Features from "../components/landing/features";
import PreRegister from "../components/pre_register";
import Login from "./login";

const LandingPage = (props) => {
    return (
        <div className="container">
            <div className="row" style={{borderBottom: "3px solid #e3324c", marginBottom: "1.5rem"}}>
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <center>
                    <div className="landing-page-main-div">
                        <div className="landing-page-main-text">
                            Busy with your life?
                        </div>
                        <div className="landing-page-supporting-text">Want to read books, but don't have enough time, then we have a solution for you</div>
                    </div>
                    </center>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-7">
                    <img src="/books.png" className="books-image" />
                </div>
            </div>
            <Features />    
            <PreRegister />
            <Login />
        </div>
    )
}

export default LandingPage;