import React from "react";
import { GoogleLogin } from 'react-google-login';
import config from "../../firebase/config";
import googleSignInWithProps from "../../firebase/googleAuthProvider";
import AuthProvider from "../../firebase/googleAuthProvider";

const GoogleLoginButton = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
        if (response.error) {
            console.log(response.error);
        }
    }
      
    return (
        <center>
        <div className="google-login-button" onClick={googleSignInWithProps}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
            &nbsp;&nbsp;Pre-register with google
        </div></center>
    )
}

export default GoogleLoginButton;