import Navbar from "./Navbar";
import React from "react";
import AppContext from "../../context/context";
import CustomCursor from "../CustomCursor";

function Layout(props) {
  return (
    <AppContext>
      <Navbar />
      <main>
        <CustomCursor />
        {props.children}
      </main>
    </AppContext>
  );
}

export default Layout;
