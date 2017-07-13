import axios from 'axios';

// ACTION TYPES

const GET_CAMPUS = "GET_CAMPUS";

// ACTION CREATORS

export function getCampus(campus) {
  return { type: GET_CAMPUS, campus }
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
};


// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
