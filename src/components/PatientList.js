import React, { PropTypes } from 'react';

const PatientList = ({ data }) => {
  let patients;
  console.log(data);
  if (data.length) {
    patients = data.map((patient, index) => (
      <li key={index}>
        <img></img>
        <p>Patient ID: {patient.patientId}</p>
        <p>Bed #{patient.bed}</p>
        <p>Room #{patient.roomNum}</p>
        <strong>{patient.firstName} {patient.lastName}</strong>
        <p>Age: {patient.age}</p>
        <p>Date Of Birth: {patient.DOB}</p>
      </li>
    ));
  }
  return (
    <ul>
    {patients}
    </ul>
  );
};

PatientList.propTypes = {
  data: PropTypes.array,
};

export default PatientList;
