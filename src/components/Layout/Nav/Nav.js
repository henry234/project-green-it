import React from "react";
import headerIcon from "../../../assests/icons/header.png";

const nav = () => {
  return (
    <nav className="dt w-100  center bg-light-green">
      <div className="dtc w3 v-mid pa3">
        <img
          src={headerIcon}
          className="dib w-100  b--white-90 grow-large border-box"
          alt="heade icon"
        />
      </div>
      <div className="dtc v-mid tr pa3">
        <p className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3">
          page-1
        </p>
        <p className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3">
          page-2
        </p>
        <p className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3">
          page-3
        </p>
        <p className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3">
          About us
        </p>
        <p className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">
          Sign Up
        </p>
      </div>
    </nav>
  );
};

export default nav;
