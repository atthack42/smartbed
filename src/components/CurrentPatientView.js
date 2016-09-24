import React, { PropTypes } from 'react';
import Chart from '../containers/Chart';
import FlatButton from 'material-ui/FlatButton';
import VitalList from './VitalList';
import CategoryList from './CategoryList';
const categories = [
['MEDICATIONS', '50 mg Benzepril'],
['MEDICAL CONDITIONS', '50 mg Benzepril'],
['PATIENT HISTORY', '50 mg Benzepril'],
['EMERGENCY CONTACT', '50 mg Benzepril'],
['PATIENT NOTES', '50 mg Benzepril'],
];

const CurrentPatientView = ({ data, message }) => {
  let alarm;
  if (data === null) {
    return (
      <div>
        Connection Not Available
      </div>
    );
  } else if (message && message.alarm) {
    alarm = (
      <div style={{ color: 'red', margin: '20px', 'fontSize': '48px' }}>
        EMERGENCY
      </div> 
    );
  } else {
    alarm = (
      <div style={{ color: '#88DD55', margin: '20px', 'fontSize': '48px' }}>
        NORMAL
      </div>
    );
  }
  return (
    <div className="col sm12 l9">
      <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>{data.firstName.toUpperCase()}'S VITAL SIGNS</div>
      {alarm}
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
