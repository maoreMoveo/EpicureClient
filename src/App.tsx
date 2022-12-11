import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/navbar/NavBar";
import { router } from "./routes";

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
