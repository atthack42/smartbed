import React, { Component, PropTypes } from 'react';

const Vital = ({ vitalInfo, vitalData }) => {
  	let images = vitalInfo.map(type => {
  		return (
  			<div style={{ margin: 'auto' }}>
  			<div className="vitalContainer">
  				<img className="vitalImage" src={type[1]}></img>
  				<div className="vitalSigns">
				    <p className="vitalNumber">{vitalData[type[0]]}</p>
				    <p className="vitalInfo">{type[2]}</p>
			  </div>
			  <div className="vitalText">
		        <p className="vitalTitle">{type[0]}</p>
		      </div>
  			</div>
  			</div>
  		);	
  	});
  	return (
  		<div style={{ display: 'flex', 'flex-direction': 'row' }}>
  		{images}
  		</div>
  	);
 //  	return (
 //  	<div style={{ margin: 'auto' }}>
	//     <div className="vitalContainer">
	//       <img className="vitalImage" src={vitalInfo[1]} />
	// 	  <div className="vitalSigns">
	// 	    <p className="vitalNumber">89</p>
	// 	    <p className="vitalInfo">{vitalInfo[2]}</p>
	// 	  </div>
	//       <div className="vitalText">
	//         <p className="vitalTitle">{vitalInfo[0]}</p>
	//       </div>
	//     </div>
	//   </div>
	// );
};

export default Vital;
