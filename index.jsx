import React from 'react';
import {render} from 'react-dom';
const path = require('path');

import NavBar from './app/components/NavBar.jsx'
import ElevenEleven from './app/components/ElevenEleven.jsx'
import PinterestBoard from './app/containers/PinterestBoard.jsx'
import ZolaVid from './app/components/ZolaVid.jsx'
// import AmazonWL from './app/containers/AmazonWL.jsx'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavBar text="Save the Date"/>
				<ElevenEleven />
				<ZolaVid />
				<PinterestBoard />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
