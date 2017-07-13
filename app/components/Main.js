import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import store, { fetchStudents, fetchCampuses } from "../store";
import StudentList from "./StudentList";
import CampusList from "./CampusList";

export default class Main extends Component {
  componentDidMount() {
    store.dispatch(fetchStudents())
    store.dispatch(fetchCampuses())
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/student" component={StudentList}/>
          <Route path="/campus" component={CampusList}/>
        </Switch>
      </div>
    );
  }
}
