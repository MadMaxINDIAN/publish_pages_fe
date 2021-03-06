import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { logout } from "../../services/actions/emailPasswordAuthProvider";

const Navbar = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleLogout = () => {
    setIsSubmitting(true);
    props.logout(setIsSubmitting);
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ borderTop: "3px solid #e3324c" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/full_logo.png" className="brand-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          {props.auth.isAuthenticated ? (
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  onClick={handleLogout}
                  className="nav-link pre-register-button"
                >
                  {isSubmitting ? (
                    <Loader
                      type="ThreeDots"
                      color="#FFFFFF"
                      height={40}
                      width={40}
                    />
                  ) : (
                    <div>Logout</div>
                  )}
                </div>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link pre-register-button">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link launch-button">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
