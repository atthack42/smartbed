import React, { PropTypes } from 'react';
import Chart from '../containers/Chart';

const CurrentPatientView = ({ data }) => {
  if (data === null) {
    return <div></div>;
  }
  return (
    <div className="col sm12 l9">
      <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>VITAL SIGNS</div>
      { data.status && <div style={{ color: 'red', margin: '20px', 'fontSize': '48px' }}>EMERGENCY</div> }
      { !data.status && <div style={{ color: '#88DD55', margin: '20px', 'fontSize': '48px' }} >NORMAL</div>}
      <Chart data={data} />
      <div className="header">Medications</div>
      <div className="description">50 mg Benzepril</div> 
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
