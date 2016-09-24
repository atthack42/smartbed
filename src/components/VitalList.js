import React, { Component, PropTypes } from 'react';
import Vital from './Vital';

const vitals = [
  ['RESPIRATORY', require('../assets/Respiratory.png'), 'breaths'],
  ['OXYGEN', require('../assets/Oxygen.png'), 'percent'],
  ['TEMPERATURE', require('../assets/Temperature.png'), 'degrees'],
  ['BPLevel', require('../assets/BPLevel.png'), 'mm/Hg'],
  ['PULSE', require('../assets/Pulse.png'), 'BPM'],
  ['MOVEMENT', require('../assets/Movement.png'), 'minutes'],
];

class VitalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vitalData: {
        RESPIRATORY: 0,
        OXYGEN: 0,
        TEMPERATURE: 0,
        BPLevel: 0,
        PULSE: 0,
        MOVEMENT: 0,
      },
    };
  }

  componentDidMount() {
    this.randomize();
  }

  randomize() {
    setInterval(()=> {
      const RESP = Math.floor(Math.random() * 8) + 8;
      const OXY = Math.floor(Math.random() * 10) + 89;
      const TEMP = Math.floor(Math.random() * 3.5) + 96;
      const BP = Math.floor(Math.random() * 35);
      const PUL = Math.floor(Math.random() * 35) + 40;
      const MOVE = Math.floor(Math.random() * 60) + 15;
      this.setState({
        vitalData: {
          RESPIRATORY: RESP,
          OXYGEN: OXY,
          TEMPERATURE: TEMP,
          BPLevel: BP,
          PULSE: PUL,
          MOVEMENT: MOVE,
        },
      });
    }, 1000);
  }

  render() {
  	return (
  		<div>
  			<Vital vitalInfo={vitals}  vitalData={this.state.vitalData} />
  		</div>
  	);
  }
}

export default VitalList;
