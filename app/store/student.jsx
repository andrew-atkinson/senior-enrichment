import axios from 'axios';

// ACTION TYPES

const SET_STUDENT = "SET_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

// ACTION CREATORS

export function setStudent(student) {
  return { type: SET_STUDENT, student }
}

export function deleteStudent(student) {
  return { type: DELETE_STUDENT, student }
}

// THUNK CREATORS

export const setNewStudent = (body) => dispatch => {
    axios.post('/api/student', body)
      .then(res => res.data)
      .then(student => {
        const action = setStudent(student);
        dispatch(action);
      });
  };


 export const deleteStudentThunk = (studentId) => dispatch => {
    axios.delete(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = deleteStudent(student);
        dispatch(action);
      });
  };



// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    case DELETE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
