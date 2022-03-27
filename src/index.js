import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/js/bootstrap.esm.js"

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
