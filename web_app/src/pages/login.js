<<<<<<< HEAD
import React from "react";
import Authenticate from "../components/authenticate";

const Login = () => {
  return (
    <div className="row">
      <Authenticate isLogin={true} />
    </div>
  );
};

export default Login;
=======
import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import GoogleLoginButton from "../components/authentication/googleLogin"
import {connect} from "react-redux";
import { loginUserWithEmailPassword } from "../services/actions/emailPasswordAuthProvider";
import FacebookLoginButton from "../components/authentication/facebookLogin";
import { useSnackbar } from "notistack";

const Login = (props) => {
    console.log(props.history);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [state,setState] = useState({
        email: '',
        password: '',
        displayName: '',
    });

    const changeHandler = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const registerUserWithEmail = (e) => {
        props.loginUserWithEmailPassword(state.email, state.password, enqueueSnackbar);
    }

    return (
        <center>
            <div className="pre-register-section-div" id="pre-register">
                Login
            </div>
            <p style={{fontSize: "1.2rem", color: "#fefefe", width: "100%", maxWidth: "700px"}} >All the pre-registered users will get privileged access to the app before its official launch.</p>
            <center>
            <div className="row" style={{marginBottom: "4rem"}}>
                <div className="col-md-6 col-sm-12">
                    <div className="email-register">
                        <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        >
                        <TextField value={state.email} id="email" name="email" label="Email" variant="filled" fullWidth type="email" onChange={changeHandler} />
                        <br />
                        <br />
                        <TextField value={state.password} id="password" name="password" label="Password" variant="filled" fullWidth type="password" onChange={changeHandler} />
                        </Box>
                        <div className="email-password-submit-button" onClick={registerUserWithEmail} >Login</div>                      
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
    )
}

Login.propTypes = {
    loginUserWithEmailPassword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, {loginUserWithEmailPassword})(Login);
>>>>>>> ce2655b78355940ac5cedd7dcbd4901269c1edfa
