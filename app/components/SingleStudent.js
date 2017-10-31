import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import studentReducer from '../reducers/studentReducer';

export default class SingleStudent extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () =>
    this.setState(store.getState()) );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const students = this.state.studentReducer.students;
    return(
      <div className="single-student-container">
        <h3>{student.name}</h3>
        
      </div>
    )
  }
}
