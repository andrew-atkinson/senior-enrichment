import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class StudentList extends Component {
  componentDidMount() {
    const { students } = this.props;
  }

  render() {
    return (
      <div className={`container`}>
        <div className={`col-lg-12`}>
          <ul className={`list-unstyled`}>
            {this.props.students.map(student => {
              return (
                <li key={student.id}>
                  {student.fullName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { students: state.students };
};

export default connect(mapStateToProps)(StudentList);
