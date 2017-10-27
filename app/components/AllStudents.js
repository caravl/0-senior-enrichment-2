import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../actions/studentActions';
import store from '../store';

export default class AllStudents extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()) );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const students = this.state.studentReducer.students;
    return(
      <div className="all-students">
        <h3>Students</h3>
        <div className="all-students-container">
        {
          students.map(student => {
            return (<div key={student.id} className="each-student-icon">
              <Link to={`/students/${student.id}`}>
                {/* <img src={campus.imageUrl} /> */}
                <h5>{student.name}</h5>
              </Link>
            </div>)
          })
        }
        </div>
      </div>
    )
  }
}
