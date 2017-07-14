import axios from 'axios';

// ACTION TYPES

const EDIT_STUDENT = "EDIT_STUDENT";

// ACTION CREATORS

export function editStudent(student) {
  return { type: EDIT_STUDENT, student }
}

// THUNK CREATORS

export const editStudentThunk = (body) => dispatch => {
    axios.put(`/api/student/${body.id}`, body)
      .then(res => res.data)
      .then(student => {
        console.log('response', student)
        const action = editStudent(student);
        dispatch(action);
      });
  };


// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDIT_STUDENT:
      return action.student;
    default:
      return state;
  }
}
