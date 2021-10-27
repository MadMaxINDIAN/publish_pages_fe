import React from "react";
import { GoogleLogin } from 'react-google-login';
import googleSignInWithProps from "../../firebase/googleAuthProvider";

const GoogleLoginButton = (props) => {
    const responseGoogle = (response) => {
        console.log(response);
        const { email, googleId, imageUrl, name } = response.profileObj;
        const credential = googleSignInWithProps(googleId);
        props.onLogin(credential, email, imageUrl, name);
    }

    return (
        <center>
        <GoogleLogin
            clientId="106385743001-nppvpv62vtfhih4aepc9mrer7n29u5bf.apps.googleusercontent.com"
            render={renderProps => (
                <div className="google-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <span>&nbsp;&nbsp;Pre-register with google</span>
                </div>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={props.onFailure}
            cookiePolicy={'single_host_origin'}
        />
        </center>
    )
}

export default GoogleLoginButton;