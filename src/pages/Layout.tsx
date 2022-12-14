import React from "react";
import { Outlet } from "react-router";
import Footer from "../componets/footer/Footer";
import NavBar from "../componets/navbar/NavBar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
