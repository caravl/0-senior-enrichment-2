import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default class Navbar extends Component {

  render() {
    return(
      <nav className="navigation">
        <div className="nav-links-container">


          <Link to="/campuses" className="nav-link">
            <h3>Campuses</h3>
          </Link>

          <Link to="/students" className="nav-link">
            <h3>Students</h3>
          </Link>

          <Link to="/addstudent">
            <button type="button">Add Student</button>
          </Link>

        </div>
      </nav>

    )
  }

}
