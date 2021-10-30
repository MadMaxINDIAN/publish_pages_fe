import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "./auth";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./type";

const auth = getAuth();

const registerUserWithEmailPassword = (email, password, displayName, enqueueSnackbar) => dispatch => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const data = user.providerData[0];
        data.displayName = displayName;
        return registerUser(data).then(res => {
            if (res.status === 200) {
                // login success
                enqueueSnackbar(`${res.data.msg} | ${displayName}`, {
                  variant: "success",
                  autoHideDuration: 6000,
                });
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: {
                    user: res.data.user,
                  },
                });
              } else {
                // login failed
                console.log(res);
                enqueueSnackbar(`${res.data.message}`, {
                  variant: "error",
                  autoHideDuration: 6000,
                });
                dispatch({
                  type: LOGIN_FAIL,
                  payload: {
                    user: null,
                  },
                });
              }
                  enqueueSnackbar(`${displayName} updates will be notified on the mail`, {
                      variant: "info",
                      autoHideDuration: 10000,
                  });
              });
        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // log error
        console.log(error);
        enqueueSnackbar(error.message, {
            variant: "error",
            autoHideDuration: 4000,
        });
    });
};

export default registerUserWithEmailPassword;