import React, { PropTypes } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const PatientList = ({ data, searchTerms, filteredData, current, select }) => {
  let dataset;
  let patients;
  if (searchTerms.length > 0) {
    patients = filteredData.map((patient, index) => {
      let currentPatientStyle = {
        margin: '10px',
      };
      let fullName = patient.firstName + ' ' + patient.lastName;
      let patientInfo = patient.patientId + '\n' + patient.DOB + patient.Age + ' yrs.\nRoom ' + patient.roomNum;
      if (current === index) {
        currentPatientStyle = {
          margin: '10px',
          background: '#43BFC7',
        };
      }
      return (
        <div>
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
      let fullName = patient.firstName + ' ' + patient.lastName;
      let patientInfo = patient.patientId + '\n' + patient.DOB + patient.Age + ' yrs.\nRoom ' + patient.roomNum;
      if (current === index) {
        currentPatientStyle = {
          margin: '10px',
          background: '#43BFC7',
        };
      }
      return (
        <div>
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
  current: PropTypes.number,
  select: PropTypes.func.isRequired,
};

export default PatientList;
        // <li
        //   className="patient"
        //   key={index}
        //   onClick={() => select(index)}
        //   style={currentPatientStyle}
        // >
        //   <img
        //     src={patient.Image}
        //     alt="patent"
        //   />
        //   <div>Patient ID: {patient.patientId}</div>
        //   <div>Bed #{patient.bed}</div>
        //   <div>Room #{patient.roomNum}</div>
        //   <strong>{patient.firstName} {patient.lastName}</strong>
        //   <div>Age: {patient.Age}</div>
        //   <div>Date Of Birth: {patient.DOB}</div>
        // </li>
