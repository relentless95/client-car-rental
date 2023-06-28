// src/context/AuthProviderWrapper.jsx

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const storeToken = (token) => {
    // to get the token from the local storage
    localStorage.setItem(`authToken`, token);
  };

  // const authenticateUser = () => {
  //   // get the token form the local storage
  //   const storedToken = localStorage.getItem("authToken");

  //   // if the token exists in the localStorage
  //   if (storedToken) {
  //     // send the JWT token in the request's "Authorization" Headers
  //     axios
  //       .get(`${API_URL}/auth/verify`, {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       })
  //       .then((response) => {
  //         //if the server verifies that the JWT toke is valid
  //         const user = response.data;
  //         // update the state variables
  //         console.log("from context----->", response);
  //         console.log("from context----->", user);

  //         setUser(user);
  //         setIsLoggedIn(true);
  //         setIsLoading(false);
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         //if the server sends an error response (invalid token)
  //         // update the state variables
  //         setIsLoggedIn(false);
  //         setIsLoading(false);
  //         setUser(null);
  //       });
  //   } else {
  //     // if the token is not available (or is removed)
  //     setIsLoggedIn(false);
  //     setIsLoading(false);
  //     setUser(null);
  //   }
  // };

  // using authenticteUser using async await

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      console.log("something4")
      try {
        const response = await axios.get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const user = response.data;

        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
        console.log("something2")
      } catch (error) {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
        console.log(error);
      }
    } else {
      console.log("something5")
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
    navigate("/");
  };

  useEffect(() => {
    authenticateUser().then(() => {
      console.log("something");
    });
  }, []);

  const refreshData = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        refreshData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviderWrapper;
