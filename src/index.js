import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./Components/MainPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
  rootElement
);
