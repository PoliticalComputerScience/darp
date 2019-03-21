import React, { Component } from 'react';

class Description extends Component {
	render() {
		return (
			<div>
				<h1>
					Description for country{this.props.country && (' with id ' + this.props.country)}!
				</h1>
				<p>
					Lorem ipsum dolor imet...
				</p>
			</div>
		);
	}
}

export default Description;
