import React, { Component } from 'react';
import Map from './Map';
import Description from './Description';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			selected: null,
		};
		this.selectCountry = this.selectCountry.bind(this);
	}

	async componentDidMount() {
		let data;
		try {
			const resp = await fetch('static/scores.json');
			if (!resp.ok) {
				console.error(`failed to fetch data: ${resp.status}: ${resp.statusText}`);
				return;
			}
			data = await resp.json();
		} catch(e) {
			console.error(`failed to load data: ${e}`)
			return;
		}
		this.setState({
			data,
		});
	}

	selectCountry(e) {
		this.setState({
			selected: e.id,
		});
	}

	render() {
		return (
			<div>
				<Map selectCountry={this.selectCountry} data={this.state.data} />
				<Description country={this.state.selected} data={this.state.data} />
			</div>
		);
	}
}

export default App;
