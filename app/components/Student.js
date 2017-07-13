import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function student(student) {
  return (
    <div className={`container col-lg-3`}>
      <img src={student.imageLocation} className={`col-lg-12 img-circle`} />
      <h4 className={`text-center`}>
        {student.fullName}
      </h4>
      <p className={`text-center`}>
        {student.email}
      </p>
    </div>
  );
}

export default student;
