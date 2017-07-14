import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import store, { fetchStudents, fetchCampuses } from "../store";
import Home from "./Home";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import newStudent from "./newStudent";
import EditStudent from "./EditStudent";
import CampusList from "./CampusList";
import CampusDetail from "./CampusDetail";
import NewCampus from './NewCampus';
import EditCampus from './EditCampus';

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
                exact
                path={`/newcampus`}
                className={`container`}
                component={NewCampus}
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
              <Route
                path={`/editcampus/:id`}
                className={`container`}
                component={EditCampus}
              />
            </Switch>
          </div>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}
