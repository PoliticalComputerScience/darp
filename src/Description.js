import React, { Component } from 'react';



class Description extends Component {
	render() {
		if (this.props.country == null) {
			return (
				<h1>
					Select a country to see more.
				</h1>
			);
		}
		if (!(this.props.country in this.props.data)) {
			return (
				<h1>
					No data on this country.
				</h1>
			);
		}
		const data = this.props.data[this.props.country];
		return (
			<div>
				<h1>
					{data.name}
				</h1>
				<h2>
					<div style={{
						'display': 'inline',
						'font-weight': 'normal',
						'padding-right': '5px',
					}}>
						Overall:
					</div>
					{data.overall}
				</h2>
				<p>
					{data.description}
				</p>
			</div>
		);
	}
}

export default Description;
