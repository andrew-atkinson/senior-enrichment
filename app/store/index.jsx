import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

// import reducers
import navBar from './navBar'
import students, {fetchStudents, fetchStudent} from './students'
import campuses, {fetchCampuses, fetchCampus} from './campuses'


// reducers
const reducer = combineReducers({
  navBar,
  students,
  campuses
})





export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

// exporting action creators
export * from './navBar'
export * from './students'
export * from './campuses'
