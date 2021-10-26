import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GoogleLoginButton from "./authentication/googleLogin";
import FacebookLoginButton from "./authentication/facebookLogin";

const PreRegister = (props) => {

    return (
        <center>
            <div className="pre-register-section-div" id="pre-register">
                Pre-register
            </div>
            <center>
            <div className="row" style={{marginBottom: "4rem"}}>
                <div className="col-md-6 col-sm-12">
                    <div className="email-register">
                        <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="email" name="email" label="Email" variant="filled" fullWidth type="email" />
                        <br />
                        <br />
                        <TextField id="password" name="password" label="Password" variant="filled" fullWidth type="password" />
                        </Box>
                        <div className="email-password-submit-button">Submit</div>                      
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

export default PreRegister;