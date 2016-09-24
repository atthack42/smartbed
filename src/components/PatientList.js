import React, { PropTypes } from 'react';

const PatientList = ({ data, current, select }) => {
  let patients;
  if (data.length) {
    patients = data.map((patient, index) => {
      let currentPatient;
      if (current === index) {
        currentPatient = {
          background: 'red',
        };
      }
      return (
        <li
          className="patient"
          key={index}
          onClick={() => select(index)}
          style={currentPatient}
        >
          <img
            src={patient.Image}
            alt="patent"
          />
          <div>Patient ID: {patient.patientId}</div>
          <div>Bed #{patient.bed}</div>
          <div>Room #{patient.roomNum}</div>
          <strong>{patient.firstName} {patient.lastName}</strong>
          <div>Age: {patient.Age}</div>
          <div>Date Of Birth: {patient.DOB}</div>
        </li>
      );
    });
  }
  return (
    <div className="col sm12 l3">
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
