import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PatientList from '../components/PatientList';
import CurrentPatientView from '../components/CurrentPatientView';
import data from '../data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      currentPatient: null,
    };
    this.handleSelected = this.handleSelected.bind(this);
    this.searchPatients = this.searchPatients.bind(this);
  }
  componentDidMount() {
    this.addData();
  }
  addData() {
    this.setState({
      patients: data.patients,
      currentPatient: data.patients[0],
    });
  }
  handleSelected() {

  }
  searchPatients(e) {
    e.preventDefault();
    // console.log('SEARCH VALUE: ', e.target.value);
  }
  render() {
    return (
      <div>
        <Navbar
          search={this.searchPatients}
        />
        <div className="row">
          <PatientList
            data={this.state.patients}
          />
          <CurrentPatientView
            data={this.state.currentPatient}
          />
        </div>
      </div>
    );
  }
}

export default App;
