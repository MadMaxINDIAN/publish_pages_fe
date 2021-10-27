import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Email from "./emailPasswordAuthProvider";

const provider = new GoogleAuthProvider();
const auth = getAuth();
const googleSignInWithProps = (props) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // login success
    console.log(user);
  }).catch((error) => {
    alert(error.message);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // Log the error to the console.
    console.log(errorCode, errorMessage, email, credential);
  })
};

export default googleSignInWithProps;

