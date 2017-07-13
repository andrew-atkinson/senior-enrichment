import axios from 'axios';

// ACTION TYPES

const GET_STUDENTS = "GET_STUDENTS";
const GET_STUDENT = "GET_STUDENT";

// ACTION CREATORS

export function getStudents(students) {
  return { type: GET_STUDENTS, students }
}

export function getStudent(student) {
  return { type: GET_STUDENT, student }
}

// THUNK CREATORS

export function fetchStudents() {
  return function thunk(dispatch) {
    axios.get('/api/student')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
};


export function fetchStudent(student) {
  return function thunk(dispatch) {
    axios.get(`api/student/${student.id}`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action);
      });
  };
};



// REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

      // not sure about this right now...
      // case GET_STUDENTS:
      //   return action.students;

    default:
      return state;
  }
}
