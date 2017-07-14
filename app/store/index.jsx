import { createStore, applyMiddleware, combineReducers } from "redux";
import createLogger from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk
import axios from "axios";

// import reducers
import navBar from "./navBar";
import students, { fetchStudents, fetchStudent } from "./students";
import campuses, { fetchCampuses } from "./campuses";
import campus, { fetchCampus, setNewCampus, editCampusThunk, deleteCampusThunk } from "./campus";
import changeCampus, { changeCurrentCampus } from "./changeCampus";
import student, { setNewStudent, deleteStudentThunk } from "./student";
import editStudent, { editStudentThunk } from "./editStudent";

// reducers
const reducer = combineReducers({
  navBar,
  students,
  campuses,
  campus,
  changeCampus,
  student,
  editStudent
});

//create store
export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

// exporting action creators
export * from "./navBar";
export * from "./students";
export * from "./campuses";
export * from "./campus";
export * from "./changeCampus";
export * from "./student";
export * from "./editStudent";
