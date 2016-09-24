import React, { Component } from 'react';
import {render} from 'react-dom';
import Subcomponent from './Subcomponent';

class App extends Component {
  render () {
    return (
    	<div>
    	  <p> title </p>
    	  <Subcomponent />
    	  <Subcomponent />
    	  <Subcomponent />
    	</div>
    	
    );
  }
}

render(<App/>, document.getElementById('root'));
