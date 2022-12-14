import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
