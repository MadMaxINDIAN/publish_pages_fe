import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { checkUser, registerUser } from "./auth";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./type";

const auth = getAuth();

const registerUserWithEmailPassword =
  (email, password, displayName, enqueueSnackbar) => (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const data = user.providerData[0];
        data.uid = user.uid;
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
          }
        });
      })
      .catch((error) => {
        enqueueSnackbar(error?.response?.data?.msg || "User already exists", {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };
  export const loginUserWithEmailPassword =
  (email, password, enqueueSnackbar, navigate) => (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return checkUser(userCredential).then((res) => {
          if (res.status === 200) {
            enqueueSnackbar("Login successful", {
              variant: "success",
              autoHideDuration: 4000,
            });
            const user = userCredential.user;
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                user: user,
              },
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            user: null,
          },
        });
        enqueueSnackbar(error?.response?.data?.msg || "Login failed", {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };

export const logoutUser = (enqueueSnackbar) => (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
      localStorage.removeItem("http://localhost:state");
    })
    .catch((error) => {
      console.log(error);
      enqueueSnackbar("Logout failed", {
        variant: "error",
        autoHideDuration: 4000,
      });
    });
};


export default registerUserWithEmailPassword;
