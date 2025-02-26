import React from "react";
import Carousel from "./Carousel";
import NavBar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const location = useLocation(); // Get the current route

  // Routes where NavBar should NOT be shown
  const hideNavRoutes = ["/login", "/signup"];

  return (
    <div>

      <Outlet />

    </div>
  );
};

export default Body;
