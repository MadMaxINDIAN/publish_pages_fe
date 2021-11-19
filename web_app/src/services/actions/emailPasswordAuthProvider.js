import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { registerUser } from "./auth";
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

export const signInWithEmailPassword =
  (email, password, enqueueSnackbar) => (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const data = user.providerData[0];
        data.uid = user.uid;
        data.emailVerified = user.emailVerified;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: data,
          },
        });
      })
      .catch((error) => {
        // log error
        console.log(error);
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            user: null,
          },
        });
        enqueueSnackbar(error?.response?.data?.msg || "User doesn't exists", {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };

export const logout = () => (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: {
          user: null,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default registerUserWithEmailPassword;
