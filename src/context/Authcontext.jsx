import React, { createContext, useEffect } from "react";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    console.log("email, password", email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("register success ::", userCredential);
      setUser(null);
      return true;
    } catch (err) {
      const error = err;
      const errorMessage = error.message;
      console.log("error", errorMessage);
      setUser(null);
      return errorMessage;
    }
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("login success", user);
        setUser({ email: user.email, id: user.uid });
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error :>> ", error);
        return errorMessage;
      });
  };

  const getUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user is logged in", user);
        setUser({ email: user.email, id: user.uid });
      } else {
        // User is signed out
        console.log("user is NOT logged in");
        setUser(null);
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("user logout success");
      setUser(null);
    } catch (error) {
      console.log("cannot logout user");
    }
  };

  useEffect(() => {
    getUserStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
