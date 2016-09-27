import React, { PropTypes } from 'react';
import {
  Card,
  CardHeader,
} from 'material-ui/Card';

const PatientList = ({ data, searchTerms, filteredData, current, select }) => {
  let patients;
  if (searchTerms.length > 0) {
    patients = filteredData.map((patient, index) => {
      let currentPatientStyle = {
        margin: '10px',
      };
      let normalStatus = {
        background: 'white',
      };
      let fullName = `${patient.firstName} ${patient.lastName}`;
      let patientInfo = `ID: ${patient.patientId} \n 
        DoB: ${patient.DOB}
        Age: ${patient.Age} yrs. \n Room ${patient.roomNum}`;
      if (current === index) {
        currentPatientStyle = {
          margin: '10px',
          background: '#43BFC7',
        };
      } else if (!patient.normal) {
        currentPatientStyle = {
          margin: '10px',
          background: 'red',
        };
      }
      return (
        <div
          key={index}
          style={normalStatus}
        >
          <Card
            className="patientEntry"
            style={currentPatientStyle}
            onClick={() => select(index)}
          >
            <CardHeader
              title={fullName}
              subtitle={patientInfo}
              avatar={patient.Image}
            />
          </Card>
        </div>
      );
    });
  } else if (data.length > 0) {
    patients = data.map((patient, index) => {
      let currentPatientStyle = {
        margin: '10px',
      };
      let fullName = `${patient.firstName} ${patient.lastName}`;
      let patientInfo = `ID: ${patient.patientId} \n 
        DoB: ${patient.DOB}
        Age: ${patient.Age} yrs. \n Room ${patient.roomNum}`;
      if (current === index) {
        currentPatientStyle = {
          margin: '10px',
          background: '#43BFC7',
        };
      } else if (!patient.normal) {
        currentPatientStyle = {
          margin: '10px',
          background: 'red',
        };
      }
      return (
        <div key={index}>
          <Card
            onClick={() => select(index)}
            style={currentPatientStyle}
          >
            <CardHeader
              title={fullName}
              subtitle={patientInfo}
              avatar={patient.Image}
            />
          </Card>
        </div>
      );
    });
  }
  return (
    <div className="col sm12 l3 patients">
      <ul>
        {patients}
      </ul>
    </div>
  );
};

PatientList.propTypes = {
  data: PropTypes.array,
  searchTerms: PropTypes.string.isRequired,
  filteredData: PropTypes.array.isRequired,
  current: PropTypes.number,
  select: PropTypes.func.isRequired,
};

export default PatientList;

