import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { checkUser, registerUser } from "./auth";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./type";

const auth = getAuth();

const registerUserWithEmailPassword =
  (email, password, displayName, enqueueSnackbar, setIsSubmitting) =>
  (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const data = user.providerData[0];
        data.uid = user.uid;
        data.emailVerified = user.emailVerified;
        data.displayName = displayName;
        setIsSubmitting(false);
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
        setIsSubmitting(false);
      });
  };
export const signInWithEmailPassword =
  (email, password, enqueueSnackbar, setIsSubmitting) => (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsSubmitting(false);
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
        setIsSubmitting(false);
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

export const logout = (setIsSubmitting) => (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: {
          user: null,
        },
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.log(error);
      setIsSubmitting(false);
    });
};

export const forgotPassword =
  (email, enqueueSnackbar, history, setIsSubmitting) => (dispatch) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        enqueueSnackbar(`Password reset email sent to ${email}`, {
          variant: "success",
          autoHideDuration: 4000,
        });
        history.push("/login");
        setIsSubmitting(false);
      })
      .catch((error) => {
        setIsSubmitting(false);
        enqueueSnackbar(error?.response?.data?.msg || "Password reset failed", {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };

export default registerUserWithEmailPassword;
