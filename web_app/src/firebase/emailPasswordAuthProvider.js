import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const registerUserWithEmailPassword = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // log error
    console.log(error.message.split("(")[1].split(")")[0].split("/")[1].replace("-", " "));
    });
};

export default registerUserWithEmailPassword;