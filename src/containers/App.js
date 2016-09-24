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
    this.handleSignout = this.handleSignout.bind(this);
  }
  componentDidMount() {
    this.setState({
      patients: data.patients,
      currentPatient: data.patients[0],
    });
  }
  handleSignout() {
    console.log('Nurse sign out');
  }
  render() {
    return (
      <div>
        <Navbar
          signout={this.handleSignout}
        />
        <div className="row">
          <PatientList className="col sm12 l3"
            data={this.state.patients}
          />
          <CurrentPatientView />
        </div>
      </div>
    );
  }
}

export default App;
