//src/context/AuthProviderWrappercpropsontext.js

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
//   const navigate = useNavigate();

  const storeToken = (token) => {
    // to get the token from the local storage
    localStorage.setItem(`authToken`, token);
  };

  const authenticateUser = () => {
    // get the token form the local storage
    const storedToken = localStorage.getItem("authToken");

    // if the token exists in the loclStorage
    if (storedToken) {
      // send the JWT token in the request's "Authorization" Headers
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          //if the server verifies that the JWT toke is valid
          const user = response.data;
          // update the state variables
          setUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          //if the server sends an error response (invalid token)
          // update the state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // if the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  const removeToken = () => {
    // Upon logout, remove the token fro the localStorage
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    // to log out the user, remove the token
    removeToken();
    authenticateUser();
    // navigate("/");
    // console.log("here")
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
