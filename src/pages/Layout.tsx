import React from "react";
import { Outlet } from "react-router";
import Footer from "../componets/footer/Footer";
import NavBar from "../componets/navbar/NavBar";
import Header from "../componets/common/Header";
import Main from "../componets/common/Main";

const Layout = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
