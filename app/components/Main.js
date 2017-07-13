import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import store, { fetchStudents, fetchCampuses } from "../store";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import CampusList from "./CampusList";
import CampusDetail from "./CampusDetail";
import Home from "./Home";

export default class Main extends Component {
  componentDidMount() {
    console.log(fetchStudents());
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className={`wrapper`}>
          <div
            className={`header header-filter`}
            // style={{ backgroundImage: `url(../img/campus/1.jpg)` }}
          />
          <div className={`main main-raised`}>
            <Switch>
              <Route
                exact
                path={`/`}
                className={`container`}
                component={Home}
              />
              <Route
                exact
                path={`/student`}
                className={`container`}
                component={StudentList}
              />
              <Route
                path={`/student/:studentId`}
                className={`container`}
                component={StudentDetail}
              />
              <Route
                exact
                path={`/campus`}
                className={`container`}
                component={CampusList}
              />
              <Route
                path={`/campus/:campusId`}
                className={`container`}
                component={CampusDetail}
              />
            </Switch>
          </div>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}
