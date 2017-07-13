import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function student(student) {
  return (
    <div className={`container col-lg-3`}>
      <p>
        {student.fullName}
      </p>
      <p>
        {student.email}
      </p>
      <img src={student.imageLocation} className={`col-lg-12 img-circle`} />
    </div>
  );
}

export default student;
