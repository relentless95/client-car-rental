import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import "./sassStyles/base/_base.scss";
import "./sassStyles/base/_typography.scss";
import "./sassStyles/layout/_global.scss";
import AuthProviderWrapper from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
