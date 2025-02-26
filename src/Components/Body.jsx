import React from "react";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const location = useLocation(); // Get the current route

  // Routes where NavBar should NOT be shown
  const hideNavRoutes = ["/login", "/signup"];

  return (
    <div>
      {/* Show NavBar only if NOT on login or signup */}
      {!hideNavRoutes.includes(location.pathname) && <NavBar />}

      {/* Show Carousel ONLY on the homepage */}
      {location.pathname === "/" && <Carousel />}

      <Outlet />

      {/* Show Footer only if NOT on login or signup */}
      {!hideNavRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Body;
