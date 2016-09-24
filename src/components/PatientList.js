import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const PatientList = ({ data, current, select }) => {
  let patients;
  if (data.length) {
    patients = data.map((patient, index) => {
      let currentPatient;
      let fullName = patient.firstName + ' ' + patient.lastName;
      if (current === index) {
        currentPatient = {
          background: 'red',
        };
      }
      return (
        <Card>
          <CardHeader
            title={fullName}
            subtitle={patient.DOB}
            avatar='https://thumbs.dreamstime.com/x/lovely-old-woman-16479068.jpg'
          />
        </Card>
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
        // <li
        //   className="patient"
        //   key={index}
        //   onClick={() => select(index)}
        //   style={currentPatient}
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
