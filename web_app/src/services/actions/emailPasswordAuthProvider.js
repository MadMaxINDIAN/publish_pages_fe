import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "./auth";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./type";

const auth = getAuth();

const registerUserWithEmailPassword =
  (email, password, displayName, enqueueSnackbar) => (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const data = user.providerData[0];
        data.emailVerified = user.emailVerified;
        data.displayName = displayName;
        return registerUser(data).then((res) => {
          if (res.status === 200) {
            // login success
            enqueueSnackbar(`${res.data.msg} | ${displayName}`, {
              variant: "success",
              autoHideDuration: 6000,
            });
            enqueueSnackbar(
              `${displayName} updates will be notified on the mail`,
              {
                variant: "info",
                autoHideDuration: 10000,
              }
            );
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                user: res.data.user,
              },
            });
          }
        });
      })
      .catch((error) => {
        // log error
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            user: null,
          },
        });
        enqueueSnackbar(error?.response?.data?.msg || "User already exists", {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };

export default registerUserWithEmailPassword;
