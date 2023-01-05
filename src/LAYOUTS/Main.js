import React from "react";
import { Outlet } from "react-router";
import Footer from "../COMPONENTS/Footer/Footer";
import Header from "../COMPONENTS/Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
