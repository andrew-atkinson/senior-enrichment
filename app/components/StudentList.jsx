import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Student from "./Student";

class StudentList extends Component {
  componentDidMount() {
    const { students } = this.props;
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <h3>Students</h3>
          <div className={`col-lg-12`}>
            <ul className={`list-unstyled`}>
              {this.props.students.map(student => {
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
  return { students: state.students };
};

export default connect(mapStateToProps)(StudentList);
