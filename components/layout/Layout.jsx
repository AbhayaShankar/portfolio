import Navbar from "./Navbar";
import React from "react";
import AppContext from "../../context/context";
import CustomCursor from "../CustomCursor";
import Info from "./Info";
import { IoInformationCircleOutline } from "react-icons/io5";

function Layout(props) {
  return (
    <AppContext>
      <Navbar />
      <CustomCursor />
      <main>
        <Info rotation={20} timing={200}>
          <IoInformationCircleOutline />
        </Info>
        {props.children}
      </main>
    </AppContext>
  );
}

export default Layout;
