import React, { Component } from 'react';
import axios from 'axios';
import AllStudents from './AllStudents';

export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.getCampusId(campusId);
  }

  getCampusId(campusId) {
    axios.get(`api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({campus}));
  }

  render() {
    const campus = this.state.campus;
    return(
      <div className="campus">
        <div>
          <h3>{campus.name}</h3>

        </div>
      </div>
    )
  }
}
