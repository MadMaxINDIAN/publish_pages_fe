import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgotPassword } from "../../services/actions/emailPasswordAuthProvider";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";

const ForgotPasswordForm = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let history = useHistory();
  useEffect(() => {
    console.log(props.auth);
    if (props.auth.isAuthenticated) {
      history.push("/");
    }
  }, [props.auth.isAuthenticated]);
  const [state, setState] = useState({
    email: "",
  });

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const forgotPasswordHandler = (e) => {
    props.forgotPassword(state.email, enqueueSnackbar, history);
  };

  return (
    <center>
      <div className="pre-register-section-div" id="pre-register">
        Forgot Password?
      </div>
      <center>
        <div className="row" style={{ marginBottom: "4rem" }}>
          <div className="col-3"></div>
          <div className="col-6">
            <div className="email-register ">
              <Box component="form" noValidate autoComplete="off">
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
              </Box>
              <div
                className="email-password-submit-button"
                onClick={forgotPasswordHandler}
              >
                Send Email
              </div>
            </div>
          </div>
        </div>
      </center>
    </center>
  );
};

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {
  forgotPassword,
})(ForgotPasswordForm);
