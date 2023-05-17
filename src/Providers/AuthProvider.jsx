/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (profile) => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };
  const logInWithGoogle = (providerGoogle) => {
    setLoader(true);
    return signInWithPopup(auth, providerGoogle);
  };
  const logInWithGithub = (providerGithub) => {
    setLoader(true);
    return signInWithPopup(auth, providerGithub);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem("amr-car-token", data.token);
          });
      }

      else{
        localStorage.removeItem('amr-car-token');
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    createUser,
    signIn,
    profileUpdate,
    logInWithGoogle,
    logInWithGithub,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
