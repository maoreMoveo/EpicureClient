import React from "react";
import { Outlet } from "react-router";
import Footer from "../componets/footer/Footer";
import NavBar from "../componets/navbar/NavBar";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import ScrollToTop from "../componets/common/scrollToTop";

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
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
