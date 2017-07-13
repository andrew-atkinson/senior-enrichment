import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import changeCampus, { changeCurrentCampus } from "../store";
import Student from "./Student";
import store from "../store";

class CampusDetail extends Component {
  componentDidMount() {
    const { campuses, students, campusId } = this.props;
    store.dispatch(changeCurrentCampus(this.props.match.params.campusId));
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <h1>
            {this.props.campuses[0].name}
          </h1>
        </div>
        <div className={`container`}>
          <div className={`col-lg-3`}>
            <img
              src={this.props.campuses[0].imagePath}
              className={`col-lg-12 .img-responsive`}
            />
          </div>
          <div className={`col-lg-9`}>
            <h3>Students</h3>
            <ul className={`list-unstyled`}>
              {this.props.students.map(student => {
                return (
                  <div>
                    <figure className={`highlight-default`}>
                      <li>
                        <Student {...student} />
                      </li>
                    </figure>
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

const mapStateToProps = function(state, ownProps) {
  return {
    campusId: +ownProps.match.params.campusId,
    campuses: state.campuses.filter(
      campus => campus.id === +ownProps.match.params.campusId
    ),
    students: state.students.filter(
      student => student.campusId === +ownProps.match.params.campusId
    )
  };
};

export default withRouter(connect(mapStateToProps)(CampusDetail));
