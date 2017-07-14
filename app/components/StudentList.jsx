import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Student from "./Student";

class StudentList extends Component {
  componentDidMount() {
    const { students, campuses } = this.props;
  }

  render() {

    return (
      <div>
        <div className={`container`}>
          <h2 className={`text-center`}>Students
          <NavLink to={`/newstudent`} className={`btn btn-success btn-xs btn-round`}>new student</NavLink></h2>

          <div className={`col-lg-12`}>
            <ul className={`list-unstyled`}>
              {this.props.students.reverse().map(student => {
                return (
                  <div>
                    <li>
                      <Student {...student} />
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { students: state.students, campuses: state.campuses };
};

export default connect(mapStateToProps)(StudentList);
