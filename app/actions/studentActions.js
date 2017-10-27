import axios from 'axios';

// ACTION TYPES
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';

// ACTION CREATORS
const getStudents = (students) => ({ type: GET_STUDENTS, students })
const getStudent = (student) => ({ type: GET_STUDENT, student })

// THUNK CREATORS
export const fetchStudents = () => {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        return dispatch(getStudents(students));
      })
      .catch(err => {console.log(error)})
  }
}

export const fetchStudent = () => {
  return function thunk (dispatch) {
    return axios.get(`/api/students/{studentId}`)
    .then(res => res.data)
    .then(student => {
      return dispatch(getStudent(student))
    })
    .catch(err => {console.log(error)})
  }
}
