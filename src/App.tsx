import React from "react";
import { RouterProvider } from "react-router-dom";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/navbar/NavBar";
import { router } from "./routes";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <RouterProvider router={router} />
      </main>
      <footer>
      <Footer/>
      </footer>
    </>
  );
};

export default App;
