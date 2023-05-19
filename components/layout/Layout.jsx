import Navbar from "./Navbar";
import React from "react";
import AppContext from "../../context/context";

function Layout(props) {
  return (
    <AppContext>
      <Navbar />
      <main>{props.children}</main>
    </AppContext>
  );
}

export default Layout;
