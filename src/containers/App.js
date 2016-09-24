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
  }
  componentDidMount() {
    let socket = io.connect('http://localhost:8000');
    console.log(socket);
    let that = this;
    socket.on('connect', function () {
      console.log('socket connected');
      socket.on('data', function (msg) {
        that.sendMessage(msg);
      });
    });
    this.addData();
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
    // console.log(e.target.key)
    this.setState({
      currentPatientIndex: index,
      currentPatient: data.patients[index],
    });
  }
  searchPatients(e) {
    e.preventDefault();
    let searchQuery = e.target.value;
    let searchResults = this.state.patients.filter(patient => {
      let fullName = patient.firstName + ' ' + patient.lastName;
      // If the search query matches the letters of the full name
      if (searchQuery.toLowerCase() === fullName.slice(0, searchQuery.length).toLowerCase()) {
        return patient;
      }
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
