import React, { Component } from 'react';
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography,
} from 'react-simple-maps';
import { Motion, spring } from 'react-motion';
import ReactTooltip from 'react-tooltip';
import './App.css';

const regions = [
	{ name: "North America", coordinates: [-101,47] },
	{ name: "South America", coordinates: [-68,-20] },
	{ name: "European Union", coordinates: [15,56] },
	{ name: "Asia", coordinates: [96,48] },
	{ name: "Africa", coordinates: [21,7] },
];

class Map extends Component {
	constructor() {
		super();
		this.state = {
			center: [0,20],
			zoom: 1,
		};
		this.handleZoomIn = this.handleZoomIn.bind(this);
		this.handleZoomOut = this.handleZoomOut.bind(this);
		this.handleRegionClick = this.handleRegionClick.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.getColor = this.getColor.bind(this);
	}

	getColor(id) {
		if (!this.props.data || !(id in this.props.data)) {
			return '#fff';
		}
		switch(this.props.data[id].overall) {
			case 'A':
				return '#662D91';
			case 'B':
				return '#8A55B2';
			case 'C':
				return '#AE82CF';
			case 'D':
				return '#D1B4E7'
			default:
				return '#F3EBFA';
		}
	}

	componentDidMount() {
		setTimeout(ReactTooltip.rebuild, 1000);
	}

	handleZoomIn() {
		this.setState({
			zoom: (this.state.zoom >= 32 ? this.state.zoom : this.state.zoom * 2),
		});
	}

	handleZoomOut() {
		this.setState({
			zoom: (this.state.zoom <= 1 ? this.state.zoom : this.state.zoom / 2),
		});
	}

	handleRegionClick(evt) {
	    const regionId = evt.target.getAttribute("data-region")
	    const region = regions[regionId]
	    this.setState({
	      center: region.coordinates,
	      zoom: (region.name === "European Union" ? 4 : 1.7),
	    })
  	}

	handleReset() {
		this.setState({
			center: [0,20],
			zoom: 1,
		});
	}

	render() {
		if (!this.props.data) {
			return (<h1>Loading...</h1>);
		}
		return (
			<div id="outermap">
				<div id="regions">
					{
						regions.map((region, i) => (
							<button
								className="region"
								key={i}
								data-region={i}
								onClick={this.handleRegionClick}
								>
								{ region.name }
							</button>
						))
					}
					<button onClick={this.handleReset} className="region" id="reset">
						{ "Reset" }
					</button>
				</div>
				<div id="controls">
					<button onClick={this.handleZoomIn} id="plus">
						{ "+" }
					</button>
					<button onClick={this.handleZoomOut} id="minus">
						{ "-" }
					</button>
				</div>
				<div id="map">
					<Motion
						defaultStyle={{
							zoom: 1,
							x: 0,
							y: 20,
						}}
						style={{
							zoom: spring(this.state.zoom, {stiffness: 280, damping: 32}),
							x: spring(this.state.center[0], {stiffness: 280, damping: 32}),
							y: spring(this.state.center[1], {stiffness: 280, damping: 32}),
						}}
					>
						{({zoom,x,y}) => (
							<ComposableMap
								projectionConfig={{ scale: 205 }}
								height={550}
								style={{
									width: "65vw"
								}}
								>
								<ZoomableGroup center={[x,y]} zoom={zoom}>
									<Geographies geography="/static/world-50m.json">
										{(geographies, projection) =>
											geographies.map((geography, i) => geography.id !== "010" && (
												<Geography
												key={i}
												data-tip
												data-for={geography.id}
												geography={geography}
												projection={projection}
												onClick={this.props.selectCountry}
												style={{
													default: {
														fill: this.getColor(geography.id),
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none",
													},
													hover: {
														fill: this.getColor(geography.id),
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none",
													},
													pressed: {
														fill: this.getColor(geography.id),
														stroke: "#662D91",
														strokeWidth: 1.5,
														outline: "none",
													},
												}}
												/>
											))}
									</Geographies>
								</ZoomableGroup>
							</ComposableMap>
						)}
					</Motion>
				</div>
				<div style={{display: "inline"}}>
					{this.props.data && Object.keys(this.props.data).map(id => (
						<ReactTooltip key={id} id={id}>
							{this.props.data[id].name}
							<br />
							Grade: {this.props.data[id].overall}
						</ReactTooltip>
					))}
				</div>
			</div>
		);
	}
}

export default Map;
