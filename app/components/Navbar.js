import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return(
      <nav className="navigation">
        <div className="nav-links-container">

          <Link to="/" className="nav-link">
            <h3>Home</h3>
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
