import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./compound/SignUpForm";
import PraticeContainer from "./container-presenter/pratice/PraticeContainer";

function Client() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/compound"} element={<SignUpForm />} />
        <Route path={"/container-presenter"} element={<PraticeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Client;
