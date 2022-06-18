import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// Components
import Login from "./Components/Login";
import Register from "./Components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/:lang" exact element={<App />} />
      <Route path="Login" element={<Login />} />
      <Route path="Login/:lang" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Register/:lang" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
