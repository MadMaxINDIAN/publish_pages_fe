import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import GoogleLoginButton from "./authentication/googleLogin";
import { connect } from "react-redux";
import registerUserWithEmailPassword, {
  signInWithEmailPassword,
} from "../services/actions/emailPasswordAuthProvider";
import FacebookLoginButton from "./authentication/facebookLogin";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";

const Authenticate = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let history = useHistory();
  useEffect(() => {
    console.log(props.auth);
    if (props.auth.isAuthenticated) {
      history.push("/");
    }
  }, []);
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const registerUserWithEmail = (e) => {
    if (props.isLogin) {
      props.signInWithEmailPassword(
        state.email,
        state.password,
        enqueueSnackbar
      );
    } else {
      props.registerUserWithEmailPassword(
        state.email,
        state.password,
        state.displayName,
        enqueueSnackbar
      );
    }
  };

  return (
    <center>
      <div className="pre-register-section-div" id="pre-register">
        {props.isLogin ? "Login" : "Register"}
      </div>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#fefefe",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        {props.isLogin ? (
          <div>
            New user? <Link to="/register">Register</Link>
          </div>
        ) : (
          <div>
            Already a user? <Link to="/login">Login</Link>
          </div>
        )}
      </p>
      <center>
        <div className="row" style={{ marginBottom: "4rem" }}>
          <div className="col-md-6 col-sm-12">
            <div className="email-register">
              <Box component="form" noValidate autoComplete="off">
                {!props.isLogin && (
                  <TextField
                    value={state.displayName}
                    id="displayName"
                    name="displayName"
                    label="Full Name"
                    variant="filled"
                    fullWidth
                    type="email"
                    onChange={changeHandler}
                  />
                )}
                <br />
                <br />
                <TextField
                  value={state.email}
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  type="email"
                  onChange={changeHandler}
                />
                <br />
                <br />
                <TextField
                  value={state.password}
                  id="password"
                  name="password"
                  label="Password"
                  variant="filled"
                  fullWidth
                  type="password"
                  onChange={changeHandler}
                />
              </Box>
              <div
                className="email-password-submit-button"
                onClick={registerUserWithEmail}
              >
                Submit
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 or-line-horizontal">
            <div className="line"></div>
            <div className="or-text">Or</div>
            <div className="line"></div>
          </div>
          <div className="col-md-1 col-sm-12 or-line-vertical">
            <div className="line"></div>
            <div className="or-text">Or</div>
            <div className="line"></div>
          </div>
          <div className="col-md-5 col-sm-12 social-login-section">
            <GoogleLoginButton />
            <FacebookLoginButton />
          </div>
        </div>
      </center>
    </center>
  );
};

Authenticate.propTypes = {
  registerUserWithEmailPassword: PropTypes.func.isRequired,
  signInWithEmailPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {
  registerUserWithEmailPassword,
  signInWithEmailPassword,
})(Authenticate);
