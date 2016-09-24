import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
require('file?name=[name].[ext]!./assets/style.css');
require('file?name=[name].[ext]!./jquery-2.2.4.min.js');
require('file?name=[name].[ext]!./materialize.min.js');
require('file?name=[name].[ext]!./materialize.min.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
