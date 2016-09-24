import React, { PropTypes } from 'react';

const PatientList = ({ data }) => {
  let patients = data;
  if (patients.length) {
    return (
      <div></div>
    );
  }
  return (
    <div>
    </div>
  );
};

PatientList.propTypes = {
  data: PropTypes.array,
};

export default PatientList;
