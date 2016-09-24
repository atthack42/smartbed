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
  if (data === null) {
    return <div>Not working</div>;
  }
  return (
    <div className="col sm12 l9">
      <div style={{ color: '#4A4A4A', margin: '20px', fontSize: '27px'}}>VITAL SIGNS</div>
      { data.status && <div style={{ color: 'red', margin: '20px', 'fontSize': '48px' }}>EMERGENCY</div> }
      { !data.status && <div style={{ color: '#88DD55', margin: '20px', 'fontSize': '48px' }} >NORMAL</div>}
      <VitalList />
      <Chart data={data} />
      {categories.map(category => 
        <CategoryList categoryInfo={category} />
      )}
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
