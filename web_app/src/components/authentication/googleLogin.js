import React from "react";
// import { GoogleLogin } from 'react-google-login';
import googleSignInWithProps from "../../services/actions/googleAuthProvider";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

const GoogleLoginButton = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    return (
        <center>
            <div className="google-login-button" onClick={() => {
                    console.log(props.googleSignInWithProps);
                    props.googleSignInWithProps(enqueueSnackbar)
                }}>
                <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                <span>&nbsp;&nbsp;Pre-register with google</span>
            </div>
        </center>
    )
}

GoogleLoginButton.propTypes = {
    googleSignInWithProps: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {googleSignInWithProps})(GoogleLoginButton);