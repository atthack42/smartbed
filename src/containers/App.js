import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PatientList from '../components/PatientList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      currentPatient: null,
    };
    this.handleSignout = this.handleSignout.bind(this);
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
        <PatientList
          data={this.state.patients}
        />
      </div>
    );
  }
}

export default App;
