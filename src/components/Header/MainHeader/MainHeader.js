import React from "react";

const mainHeader = props => {
  return (
    <div className="vh-50">
      <img className="w-50 w-20-ns center" src={props.loc} alt={props.name} />
      <p className="tc b h2 mb3">
        something your product feature, by passing props to change it bab
      </p>
    </div>
  );
};

export default mainHeader;
