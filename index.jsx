import React from 'react';
import {render} from 'react-dom';
const path = require('path');

import NavBar from './app/components/NavBar.jsx'
import ElevenEleven from './app/components/ElevenEleven.jsx'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavBar text="Save the Date"/>
				<ElevenEleven />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
