import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PatientList from '../components/PatientList';
import CurrentPatientView from '../components/CurrentPatientView';
import data from '../data.js';
import io from 'socket.io-client/socket.io.js';
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
      message: null,
      searchTerms: '',
      filteredList: [],
    };
    this.handleSelected = this.handleSelected.bind(this);
    this.searchPatients = this.searchPatients.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const socket = io.connect('http://localhost:8000');
    console.log(socket);
    const that = this;
    socket.on('connect', () => {
      socket.on('data', (msg) => {
        that.sendMessage(msg);
      });
    });
    this.addData();
    this.randomizePatientStatus();
  }
  addData() {
    this.setState({
      patients: data.patients,
      currentPatient: data.patients[0],
      currentPatientIndex: 0,
    });
  }
  sendMessage(val) {
    this.setState({
      message: val,
    });
  }
  handleSelected(index) {
    this.setState({
      currentPatientIndex: index,
      currentPatient: data.patients[index],
    });
  }
  randomizePatientStatus() {
    setInterval(() => {
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.state.patients.length);
        const restOfPatients = this.state.patients;
        const patientChange = this.state.patients[index];
        patientChange.normal = !patientChange.normal;
        restOfPatients[index].normal = patientChange.normal;
        this.setState({
          patients: restOfPatients,
        });
      }, 1000);
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.state.patients.length);
        const restOfPatients = this.state.patients;
        const patientChange = this.state.patients[index];
        patientChange.normal = !patientChange.normal;
        restOfPatients[index].normal = patientChange.normal;
        this.setState({
          patients: restOfPatients,
        });
      }, 1500);
    }, 10000);
  }
  searchPatients(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    const searchResults = this.state.patients.filter(patient => {
      const fullName = `${patient.firstName} ${patient.lastName}`;
      // If the search query matches the letters of the full name
      if (searchQuery.toLowerCase() === fullName.slice(0, searchQuery.length).toLowerCase()) {
        return patient;
      }
      return false;
    });
    this.setState({
      searchTerms: searchQuery,
      filteredList: searchResults,
    });
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
              searchTerms={this.state.searchTerms}
              filteredData={this.state.filteredList}
            />
            <CurrentPatientView
              data={this.state.currentPatient}
              message={this.state.message}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
