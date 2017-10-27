import { GET_CAMPUSES, GET_CAMPUS } from '../actions/campusActions'

const initialState = {
  campuses: [],
  campus: []
}

export default function campusReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign( {}, state, {campuses: action.campuses} )
    case GET_CAMPUS:
      return Object.assign( {}, state, {campus: action.campus} )
    default:
      return state
  }
}
