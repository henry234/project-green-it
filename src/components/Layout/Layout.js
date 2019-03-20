import React from "react";
import Aux from "../../hoc/Aux";
import Nav from "./Nav/Nav";
import Footer from "../Footer/Footer";

const contentClass = "h-100 w-100";

const layout = props => (
  <Aux>
    <Nav />
    <main className={contentClass}>{props.children}</main>
    <Footer />
  </Aux>
);
export default layout;
