import React, { Component } from 'react';
import Map from './Map';
import Description from './Description';

class App extends Component {
	render() {
		return (
			<div>
				<Map />
				<Description />
			</div>
		);
	}
}

export default App;
