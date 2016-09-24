import React, { PropTypes } from 'react';

const CurrentPatientView = ({ data }) => {
  if (data === null) {
    return <div></div>;
  }
  return (
    <div className="col sm12 l9">
      <div>
        <img
          className="avatar"
          src={data.Image}
          alt="patient"
        />
      </div>
      <div>{data.firstName} {data.lastName}</div>
    </div>
  );
};

CurrentPatientView.propTypes = {
  data: PropTypes.object,
};

export default CurrentPatientView;
