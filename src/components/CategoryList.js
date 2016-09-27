import React, { PropTypes } from 'react';

const CategoryList = ({ categoryInfo }) => (
  <div>
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
      }}
    >
      <div className="header">
        {categoryInfo[0]}
      </div>
      <img
        className="subHeader"
        src={require('../assets/EditIcon.png')} // eslint-disable-line
        alt="edit"
      />
    </div>
    <div
      className="description"
    >
      {categoryInfo[1]}
    </div>
  </div>
);

CategoryList.propTypes = {
  categoryInfo: PropTypes.array.isRequired,
};

export default CategoryList;
