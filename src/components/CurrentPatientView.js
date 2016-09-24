import React, { PropTypes } from 'react';

const CurrentPatientView = ({ currentPatient }) => {
  if (currentPatient === null) {
    return <div></div>;
  }
  return (
    <div>
      Current Patient
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
