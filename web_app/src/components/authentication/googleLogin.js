import React from "react";
// import { GoogleLogin } from 'react-google-login';
import googleSignInWithProps from "../../services/actions/googleAuthProvider";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

const GoogleLoginButton = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const responseGoogle = (response) => {
        console.log(response);
        const { email, googleId, imageUrl, name } = response.profileObj;
        // const credential = googleSignInWithProps(googleId);
        enqueueSnackbar(`Welcome ${name}`, {
            variant: "success",
            autoHideDuration: 3000,
            onClose: closeSnackbar
        });

    }

    return (
        <center>
        {/* GOOGLE BUTTON LOGIN */}
        {/* <GoogleLogin
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
        /> */}

        {/* FIREBASE LOGIN */}
        <div className="google-login-button" onClick={() => {props.googleSignInWithProps(enqueueSnackbar)}}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
            <span>&nbsp;&nbsp;Pre-register with google</span>
        </div>
        </center>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInWithProps
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);