import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import highcharts from 'highcharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props,
    };
    this.chart = undefined;
  }

  componentDidMount() {
  	let that = this;
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
	                      y = Math.sqrt(Math.pow(that.props.message.yaxis, 2) + Math.pow(that.props.message.xaxis, 2));
	                  series.addPoint([x, y], true, true);
	              }, 500);
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
        min: 0,
        max: 250,
	      title: {
	          text: 'Movement Intensity'
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
	      color: '#EE6688',
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
    return (
        <div ref="chart" style={{ height: '350', width: '800', display: 'flex', justifyContent: 'space-around', marginTop: '1px', marginBottom: '20px' }} ></div>
    );
  }
}

export default Chart;

