// THINK OF THE UTILS FILE AS THE BUSINESS LOGIC LAYER
// BE VERY CLEAR THAT THIS DOES NOT RUN CREATE, READ, UPDATE, DELETE OPERATIONS
// ^^ THESE ARE EXCLUSIVE AND ISOLATED TO THE SERVICE LAYER
// BUSINESS LOGIC LAYER HOUSES AND IMPLEMENTS THE FUNCTIONS WHICH SERVICES THE INTERACTIONS OF THE USERS
// AS DEFINED IN YOUR USECASE, INTERACTION OVERVIEW AND SEQUENCE DIAGRAMS

import { auth } from "../../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

async function REGISTER(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user succesfully signedUp", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

async function LOGIN(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user succesfully login", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

async function LOGOUT() {
  return signOut(auth)
    .then((response) => {
      // Sign-out successful.
      console.log("user succesfully logout", response);
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

export { REGISTER, LOGIN, LOGOUT };
