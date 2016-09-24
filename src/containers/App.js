import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PatientList from '../components/PatientList';
import CurrentPatientView from '../components/CurrentPatientView';


const testPatient = {
  patientId: 123,
  firstName: 'Andrew',
  lastName: 'Fung',
  DOB: 6071912,
  Image: 'url',
  Age: 24,
  roomNum: 101,
  weight: 59,
  height: 172,
  emergencyContact: {
  	firstName: 'Will',
  	lastName: 'Fung',
  	relationship: 'Father',
  	phone: 59046983
  },
  preexistingConditions: ['high blood', 'pressure', 'asthma', 'cancer'],
  familyHistory: [
  	{
  	  firstName: 'Will',
  	  lastName: 'Fung',
  	  relationship: 'Father',
  	  conditions: ['high blood pressure']
  	},
  	{
  	  firstName: 'Lynn',
  	  lastName: 'Fung',
  	  relationship: 'Mother',
  	  conditions: ['anemia']
  	}
  ]
};
import data from '../data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      currentPatient: testPatient,
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
