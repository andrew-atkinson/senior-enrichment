import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import store, { fetchStudents, fetchCampuses } from "../store";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import CampusList from "./CampusList";
import CampusDetail from "./CampusDetail";
import Home from "./Home";
import newStudent from "./newStudent";
import EditStudent from "./EditStudent";

export default class Main extends Component {
  componentDidMount() {
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
          >
            <div className={`container`}>
              <div className={`row`}>
                <div className={`col-md-6 col-md-offset-3  col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2`}>
                  <h2 className={`title text-center`}>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
                </div>
              </div>
            </div>
          </div>
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
              <Route
                path={`/newstudent`}
                className={`container`}
                component={newStudent}
              />

              <Route
                path={`/editstudent/:id`}
                className={`container`}
                component={EditStudent}
              />
            </Switch>
          </div>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}
