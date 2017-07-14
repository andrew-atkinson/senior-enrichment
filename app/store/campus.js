import axios from "axios";

// ACTION TYPES

const GET_CAMPUS = "GET_CAMPUS";
const SET_CAMPUS = "SET_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";


// ACTION CREATORS

export function getCampus(campus) {
  return { type: GET_CAMPUS, campus };
}

export function setCampus(campus) {
  return { type: SET_CAMPUS, campus };
}

export function editCampus(campus) {
  return { type: EDIT_CAMPUS, campus };
}

export function deleteCampus(campus) {
  return { type: DELETE_CAMPUS, campus };
}

// THUNK CREATORS

export function fetchcampus(campus) {
  return function thunk(dispatch) {
    axios.get(`/api/campus/${campus.id}`)
    .then(res => res.data)
    .then(campus => {
      const action = getcampus(campus);
      dispatch(action);
    });
  };
}

export function setNewCampus(campus) {
  return function thunk(dispatch) {
    axios.post(`/api/campus/`, campus)
    .then(res => res.data)
    .then(campus => {
      const action = setCampus(campus);
      dispatch(action);
    });
  };
}

export function editCampusThunk(campus) {
  return function thunk(dispatch) {
    axios.put(`/api/campus/${campus.id}`, campus)
    .then(res => res.data)
    .then(campus => {
      const action = editCampus(campus);
      dispatch(action);
    });
  };
}

export function deleteCampusThunk(campusId) {
  return function thunk(dispatch) {
    axios.delete(`/api/campus/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      const action = deleteCampus(campus);
      dispatch(action);
    });
  };
}


// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    case SET_CAMPUS:
      return action.campus;
    case EDIT_CAMPUS:
      return action.campus;
    case DELETE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
