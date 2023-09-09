import Navbar from "./Navbar";
import React from "react";
import AppContext from "../../context/context";
import CustomCursor from "../CustomCursor";
import Info from "./Info";

function Layout(props) {
  return (
    <AppContext>
      <Navbar />
      <main>
        <CustomCursor />
        <Info />
        {props.children}
      </main>
    </AppContext>
  );
}

export default Layout;
