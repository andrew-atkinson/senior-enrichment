import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    const { campuses } = this.props.campuses;
    const { students } = this.props.students;
  }

  render() {
    return (
      <div className={`container`}>
        <div className={`col-lg-6`}>this</div>
        <div className={`col-lg-6`}>that</div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { campuses: state.campuses, students: state.students };
};

export default connect(mapStateToProps)(Home);
