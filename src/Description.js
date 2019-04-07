import React, { Component } from 'react';

const sections = [
	["access_consent", "Right to Access and Consent"],
	["law_enforcement", "Law Enforcement Access"],
	["localization", "Data Localization"],
	["enforcement", "Enforcement"],
	["jurisdictional_cov", "Jurisdictional Coverage"],
	["stability", "Legislative Stability"],
];

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
					<span style={{
						'font-weight': 'normal',
						'padding-right': '5px',
					}}>
						Overall:
					</span>
					{data.overall}
				</h2>
				<p>
					{data.overall_desc}
				</p>
				{sections.map(section => (
					<div>
						<h2>
							<span style={{
								'font-weight': 'normal',
								'padding-right': '5px',
							}}>
								{section[1]}:
							</span>
							{data[section[0]]}
						</h2>
						<p>
							{data[section[0] + "_desc"]}
						</p>
					</div>
				))}
			</div>
		);
	}
}

export default Description;
