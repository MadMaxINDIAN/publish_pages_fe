import React from "react";
import { GoogleLogin } from 'react-google-login';
import config from "../../firebase/config";
import googleSignInWithProps from "../../firebase/googleAuthProvider";
import AuthProvider from "../../firebase/googleAuthProvider";

const FacebookLoginButton = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
        if (response.error) {
            console.log(response.error);
        }
    }
      
    return (
        <center>
        <div className="facebook-login-button" onClick={googleSignInWithProps}>
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
            &nbsp;&nbsp;Pre-register with facebook
        </div></center>
    )
}

export default FacebookLoginButton;