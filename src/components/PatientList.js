import React, { PropTypes } from 'react';

const PatientList = ({ data }) => {
  let patients;
  console.log(data);
  if (data.length) {
    patients = data.map((patient, index) => (
      <li
        className="patient"
        key={index}>
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
    ));
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
};

export default PatientList;
