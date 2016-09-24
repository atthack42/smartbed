import React, { Component, PropTypes } from 'react';
import Chart from '../containers/Chart';

const CurrentPatientView = ({ data }) => {
  if (data === null) {
    return <div></div>;
  }
  return (
    <div className="col sm12 l9">
      <Chart />
    </div>
  );
};

// CurrentPatientView.propTypes = {
//   currentPatient: PropTypes.object,
// };

export default CurrentPatientView;
