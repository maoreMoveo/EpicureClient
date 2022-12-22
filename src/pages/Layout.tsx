import React from "react";
import { Outlet } from "react-router";
import FooterContent from "../componets/footer/FooterContent";
import NavBar from "../componets/navbar/NavBar";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Footer from '../layouts/Footer';
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
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
};

export default Layout;
