import React, { PropTypes } from 'react';
import Chart from '../containers/Chart';
import FlatButton from 'material-ui/FlatButton';


const CurrentPatientView = ({ data, message }) => {
  if (data === null) {
    return <div>Not working</div>;
  }
  return (
    <div className="col sm12 l9">
      <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>{data.firstName.toUpperCase()}'S VITAL SIGNS</div>
      { data.status && <div style={{ color: 'red', margin: '20px', 'fontSize': '48px' }}>EMERGENCY</div> }
      { !data.status && <div style={{ color: '#88DD55', margin: '20px', 'fontSize': '48px' }} >NORMAL</div>}
      <FlatButton style={{ marginTop: '40px', marginBottom: '0px' }}label="View History" primary={true} />
      <Chart data={data} message={message}/>
      <div className="header">Medications</div>
      <div className="description">50 mg Benzepril</div> 
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
