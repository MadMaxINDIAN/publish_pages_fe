import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomePage from "../pages/home";
import Features from "../components/landing/features";
import PreRegister from "../components/authenticate";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const LandingPage = (props) => {
  let history = useHistory();
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      history.push("/home");
    }
  }, [props.auth.isAuthenticated]);
  return (
    <div className="container">
      <div
        className="row"
        style={{ borderBottom: "3px solid #e3324c", marginBottom: "1.5rem" }}
      >
        <div className="col-sm-12 col-md-6 col-lg-5">
          <center>
            <div className="landing-page-main-div">
              <div className="landing-page-main-text">Busy with your life?</div>
              <div className="landing-page-supporting-text">
                Want to read books, but don't have enough time, then we have a
                solution for you
              </div>
            </div>
          </center>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7">
          <img src="/books.png" className="books-image" />
        </div>
      </div>
      <Features />
    </div>
  );
};

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(LandingPage);
