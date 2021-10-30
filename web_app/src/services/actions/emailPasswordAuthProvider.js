import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const registerUserWithEmailPassword = (email, password, enqueueSnackbar) => dispatch => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // log
        console.log(user)

        // login success
        enqueueSnackbar(`Pre-registeration successfull | ${user.displayName}`, {
            variant: "success",
            autoHideDuration: 6000,
          });
      
        enqueueSnackbar(`${user.displayName} updates will be notified on the mail`, {
            variant: "info",
            autoHideDuration: 10000,
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // log error
        enqueueSnackbar(error.message.split("(")[1].split(")")[0].split("/")[1].replace("-", " "), {
            variant: "error",
            autoHideDuration: 4000,
        });
    });
};

export default registerUserWithEmailPassword;