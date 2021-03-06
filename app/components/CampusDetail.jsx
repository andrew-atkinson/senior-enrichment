import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import changeCampus, { changeCurrentCampus } from "../store";
import Student from "./Student";
import store, { deleteCampusThunk } from "../store";

class CampusDetail extends Component {
  componentDidMount() {
    const { campuses, students, campusId } = this.props;
    store.dispatch(changeCurrentCampus(this.props.match.params.campusId));
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-xs-12`}>
            <h1 className={`text-center`}>
              {this.props.campuses[0].name}
            </h1>
            <img
              src={this.props.campuses[0].imagePath}
              className={`col-lg-12 col-md-12 col-sm-12 col-xs-12`}
            />
            <div className={`col-lg-12 text-center`}>
              <NavLink
                to={`/editcampus/${this.props.campuses[0].id}`}
                className={`btn btn-warning btn-xs btn-round`}
              >
                edit
              </NavLink>
              <button
                className={`btn btn-danger btn-xs btn-round`}
                onClick={evt => handleClick(evt, this.props.match.params.campusId)}
              >
                delete
              </button>
            </div>
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

function handleClick(evt, campusId) {
  evt.preventDefault();
  store.dispatch(deleteCampusThunk(campusId));
}

export default withRouter(connect(mapStateToProps)(CampusDetail));
