import React from "react";
import PreRegister from "../components/pre_register";

const LandingPage = (props) => {
    return (
        <div className="container">
            <div className="row" style={{borderBottom: "3px solid #e3324c"}}>
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
            <PreRegister />
        </div>
    )
}

export default LandingPage;