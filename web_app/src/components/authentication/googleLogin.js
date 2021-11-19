import React, { useState } from "react";
// import { GoogleLogin } from 'react-google-login';
import googleSignInWithProps from "../../services/actions/googleAuthProvider";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

const GoogleLoginButton = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <center>
      <div
        className="google-login-button"
        onClick={() => {
          setIsSubmitting(true);
          props.googleSignInWithProps(enqueueSnackbar, setIsSubmitting);
        }}
      >
        {isSubmitting ? (
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
        ) : (
          <div>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
            <span>&nbsp;&nbsp;Google</span>
          </div>
        )}
      </div>
    </center>
  );
};

GoogleLoginButton.propTypes = {
  googleSignInWithProps: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { googleSignInWithProps })(
  GoogleLoginButton
);
