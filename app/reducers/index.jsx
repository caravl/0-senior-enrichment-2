import { combineReducers } from 'redux';
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  campusReducer,
  studentReducer
});

export default rootReducer;
