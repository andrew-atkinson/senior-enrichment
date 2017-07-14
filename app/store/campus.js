import axios from "axios";

// ACTION TYPES

const GET_CAMPUS = "GET_CAMPUS";
const SET_CAMPUS = "SET_CAMPUS";

// ACTION CREATORS

export function getCampus(campus) {
  return { type: GET_CAMPUS, campus };
}

export function setCampus(campus) {
  return { type: SET_CAMPUS, campus };
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

// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    case SET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
