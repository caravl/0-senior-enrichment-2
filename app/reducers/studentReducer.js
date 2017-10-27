import { GET_STUDENTS, GET_STUDENT } from '../actions/studentActions'

const initialState = {
  students: [],
  student: []
}

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return Object.assign( {}, state, {students: action.students} )
    case GET_STUDENT:
      return Object.assign( {}, state, {student: action.student} )
    default:
      return state
  }
}
