import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

function campus(campus) {
  return (
    <div className={`col-lg-3 col-md-6 col-sm-6 col-xs-12`}>
      <NavLink to={`/campus/${campus.id}`}>
        <h4 className={`col-lg-4 col-md-4 text-center`}>
          {campus.name}
        </h4>
      <img src={campus.imagePath} className={`col-lg-12 col-md-12 col-sm-12 col-xs-12`} />
      </NavLink>
    </div>
  );
}

export default campus;
