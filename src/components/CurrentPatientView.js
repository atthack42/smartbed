import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import highcharts from 'highcharts';


// const CurrentPatientView = ({ data }) => {
//   console.log('currentPatient data: ', data);
//   if (data === null) {
//     return <div>No data</div>;
//   }
//   return (
//     <div className="col sm12 l9">
//       <div><img className="avatar" src={data.Image} /></div>
//       <div>{data.firstName} {data.lastName}</div>
//     </div>
//   );
// };

class CurrentPatientView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props,
    };
    this.chart = undefined;
  }

  componentDidMount() {
    this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
      chart: {
	      type: 'spline',
	      animation: highcharts.svg, // don't animate in old IE
	      marginRight: 10,
	      events: {
	          load: function () {

	              // set up the updating of the chart each second
	              var series = this.series[0];
	              setInterval(function () {
	                  var x = (new Date()).getTime(), // current time
	                      y = Math.random();
	                  series.addPoint([x, y], true, true);
	              }, 1000);
	          }
	      }
	  },
	  title: {
	      text: ''
	  },
	  xAxis: {
	      type: 'datetime',
	      tickPixelInterval: 150
	  },
	  yAxis: {
	      title: {
	          text: 'Value'
	      },
	      plotLines: [{
	          value: 0,
	          width: 1,
	          color: '#808080'
	      }]
	  },
	  tooltip: {
	      formatter: function () {
	          return '<b>' + this.series.name + '</b><br/>' +
	              highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
	              highcharts.numberFormat(this.y, 2);
	      }
	  },
	  legend: {
	      enabled: false
	  },
	  exporting: {
	      enabled: false
	  },
	  series: [{
	      name: 'Random data',
	      data: (function () {
	          // generate an array of random data
	          var data = [],
	              time = (new Date()).getTime(),
	              i;

	          for (i = -19; i <= 0; i += 1) {
	              data.push({
	                  x: time + i * 1000,
	                  y: Math.random()
	              });
	          }
	          return data;
	      }())
	  }]
    });
  }

  render() {
    let date = new Date();
    date = date.toString().slice(0,16);
    return (
      <div className="col sm12 l9">
        <div>{date}</div>
        <div ref="chart"></div>
      </div>
    );
  }
}

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
