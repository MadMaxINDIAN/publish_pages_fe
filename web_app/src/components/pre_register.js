import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import GoogleLoginButton from "./authentication/googleLogin";
import {connect} from "react-redux";
import registerUserWithEmailPassword from "../services/actions/emailPasswordAuthProvider";
import FacebookLoginButton from "./authentication/facebookLogin";
import { useSnackbar } from "notistack";

const PreRegister = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [state,setState] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const registerUserWithEmail = (e) => {
        props.registerUserWithEmailPassword(state.email, state.password, enqueueSnackbar);
    }

    return (
        <center>
            <div className="pre-register-section-div" id="pre-register">
                Pre-register
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
                        <div className="email-password-submit-button" onClick={registerUserWithEmail} >Submit</div>                      
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

PreRegister.propTypes = {
    registerUserWithEmailPassword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {registerUserWithEmailPassword}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreRegister);