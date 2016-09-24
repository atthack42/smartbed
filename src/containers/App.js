import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PatientList from '../components/PatientList';
import CurrentPatientView from '../components/CurrentPatientView';
import data from '../data.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      currentPatient: null,
      currentPatientIndex: null,
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
      currentPatientIndex: 0,
    });
  }
  handleSelected(index) {
    // console.log(e.target.key)
    this.setState({
      currentPatientIndex: index,
    });
  }
  searchPatients(e) {
    e.preventDefault();
    // console.log('SEARCH VALUE: ', e.target.value);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Navbar
          search={this.searchPatients}
        />
        <div className="row">
          <PatientList
            data={this.state.patients}
            current={this.state.currentPatientIndex}
            select={this.handleSelected}
          />
          <CurrentPatientView
            data={this.state.currentPatient}
          />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
