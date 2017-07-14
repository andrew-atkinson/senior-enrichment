import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function student(student) {

  const campus = student.campuses.filter((campus)=>student.campusId===campus.id)

  return (
    <div>
      <div className={`container col-lg-3 col-md-6 col-sm-6 col-xs-12`}>
        <img
          src={student.imageLocation}
          className={`img-circle col-lg-12 col-md-6 col-sm-12 col-xs-12 `}
        />
        <h4 className={`text-center`}>
          {student.fullName}
        </h4>
        <p className={`text-center`}>Studying at: {campus[0].name} campus</p>
        <p className={`text-center`}>
          {student.email}
        </p>
        <div className={`col-lg-12 text-center`}><NavLink to={`/editstudent/${student.id}`} className={`btn btn-warning btn-xs btn-round`}>edit</NavLink> <NavLink to={`/`} className={`btn btn-danger btn-xs btn-round`}>delete</NavLink></div>
        <hr />
        <div className={`col-lg-12 text-center`}></div>
        <br />
        <br />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { campuses: state.campuses}
}

export default connect(mapStateToProps)(student);
