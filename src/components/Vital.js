import React, { PropTypes } from 'react';

const Vital = ({ vitalInfo, vitalData }) => {
  let images = vitalInfo.map((type, index) => (
    <div
      key={index}
      style={{ margin: 'auto' }}
    >
      <div className="vitalContainer">
        <img
          className="vitalImage"
          src={type[1]}
          alt="vital-img"
        />
        <div className="vitalSigns">
          <p className="vitalNumber">{vitalData[type[0]]}</p>
          <p className="vitalInfo">{type[2]}</p>
        </div>
        <div className="vitalText">
          <p className="vitalTitle">{type[0]}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {images}
    </div>
  );
};

Vital.propTypes = {
  vitalInfo: PropTypes.array.isRequired,
  vitalData: PropTypes.object.isRequired,
};

export default Vital;
