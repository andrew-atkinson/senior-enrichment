import axios from 'axios';

// ACTION TYPES

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_CAMPUS = "GET_CAMPUS";

// ACTION CREATORS

export function getCampuses(campuses) {
  return { type: GET_CAMPUSES, campuses }
}

export function getCampus(campus) {
  return { type: GET_CAMPUS, campus }
}

// THUNK CREATORS

export function fetchCampuses() {
  return function thunk(dispatch) {
    axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
};


export function fetchcampus(campus) {
  return function thunk(dispatch) {
    axios.get(`/api/campus/${campus.id}`)
      .then(res => res.data)
      .then(campus => {
        const action = getcampus(campus);
        dispatch(action);
      });
  };
};



// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

      // not sure about this right now...
      // case GET_CAMPUSS:
      //   return action.campus;

    default:
      return state;
  }
}
