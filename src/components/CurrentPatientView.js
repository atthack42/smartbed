import React, { PropTypes } from 'react';
import Chart from '../containers/Chart';
import FlatButton from 'material-ui/FlatButton';


const CurrentPatientView = ({ data, message }) => {
  if (data === null) {
    return (
      <div className="col sm12 l9">
        <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>NO CONNECTION</div>
        
      </div>
    );
  }
  return (
    <div className="col sm12 l9">
      <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>{data.firstName.toUpperCase()}'S VITAL SIGNS</div>
      { message.alarm && <div style={{ color: 'red', margin: '20px', 'fontSize': '48px' }}>EMERGENCY</div> }
      { !message.alarm && <div style={{ color: '#88DD55', margin: '20px', 'fontSize': '48px' }} >NORMAL</div>}
      <Chart style={{borderStyle: 'solid', borderWidth: '5px'}} data={data} message={message}/>
      <FlatButton label="Primary" primary={true} />
      <div className="header">Medications</div>
      <div className="description">50 mg Benzepril</div> 
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
