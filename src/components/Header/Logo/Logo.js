import React from "react";
import plant from "./plant.png";

const logo = () => {
  return (
    <div className="flex justify-center  w-100">
      <h1>
        Green<span className="blue">It</span>
      </h1>
      <img className="w3 h3" src={plant} alt="tree" />
    </div>
  );
};
export default logo;
