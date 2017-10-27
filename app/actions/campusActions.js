import axios from 'axios';

// ACTION TYPES
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATORS
const getCampuses = (campuses) => ({ type: GET_CAMPUSES, campuses })
const getCampus = (campus) => ({ type: GET_CAMPUS, campus })

// THUNK CREATORS
export const fetchCampuses = () => {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        return dispatch(getCampuses(campuses));
      })
      .catch(err => {console.log(error)})
  }
}

export const fetchCampus = () => {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/{campusId}`)
    .then(res => res.data)
    .then(campus => {
      return dispatch(getCampus(campus))
    })
    .catch(err => {console.log(error)})
  }
}
