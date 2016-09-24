import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
require('file?name=[name].[ext]!./assets/style.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
