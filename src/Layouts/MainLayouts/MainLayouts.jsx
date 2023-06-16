import React from "react";
import Navber from "../../Pages/Share/Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Share/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
