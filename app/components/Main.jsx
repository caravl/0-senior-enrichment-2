import React, { Component } from 'react';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';

import { fetchCampuses } from '../actions/campusActions';
import { fetchStudents } from '../actions/studentActions';

export default class Main extends Component {

  componentDidMount() {
    const campusThunk = fetchCampuses();
    const studentThunk = fetchStudents();
    store.dispatch(campusThunk);
    store.dispatch(studentThunk);
  }

  render() {
    return(
      <Router>
        <div>
          <div className="homepage">
            <h1>Welcome to Margaret Hamilton Interplanetary Academy of JavaScript</h1>
          </div>
          <Navbar />
          <Switch>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="students/:studentId" component={SingleStudent} />
          </Switch>
        </div>
      </Router>
    )
  }
}
