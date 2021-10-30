import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import Email from "./emailPasswordAuthProvider";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./type";
import { registerUser } from "./auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();
const googleSignInWithProps = (enqueueSnackbar) => (dispatch) => {
	signInWithPopup(auth, provider)
		.then(async (result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			const res = await registerUser(user.providerData[0]);
			if (res.status === 200) {
				// login success
				enqueueSnackbar(`${res.data.msg} | ${user.displayName}`, {
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

			enqueueSnackbar(
				`${user.displayName} updates will be notified on the mail`,
				{
					variant: "info",
					autoHideDuration: 10000,
				}
			);
		})
		.catch((error) => {
			enqueueSnackbar(error.message, {
				variant: "error",
			});

			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// Log the error to the console.
			console.log(errorCode, errorMessage, email, credential);
		});
};

export default googleSignInWithProps;
