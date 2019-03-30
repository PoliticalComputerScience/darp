import React, { Component } from 'react';
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography,
	Markers,
	Marker,
} from 'react-simple-maps';
import { Motion, spring } from 'react-motion';
import ReactTooltip from 'react-tooltip';

const wrapperStyles = {
	width: "100%",
	maxWidth: 980,
	margin: "0 auto",
};

const regions = [
// [longitude, latitude]
	{ name: "North America", coordinates: [-101.2996,47.1164] },
	{ name: "Central (?) America", coordinates: [-85.1024,13.4746] },
	{ name: "European Union", coordinates: [15.2551,54.5260] },
	{ name: "Asia", coordinates: [96,48] },
	{ name: "Africa", coordinates: [21.0936,7.1881] },
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
	      zoom: (region.name === "Central (?) America" || region.name === "European Union" ? 4 : 2),
	    })
  	}

	handleReset() {
		this.setState({
			center: [0,20],
			zoom: 1,
		});
	}

	render() {
		return (
		  <div>
			<div style={wrapperStyles}>
				{
				regions.map((region, i) => (
				  <button
				    id="a"
				    key={i}
				    data-region={i}
				    onClick={this.handleRegionClick}
				    >
				    { region.name }
				  </button>
				))
				}
				<button onClick={this.handleZoomIn}>
					{ "Zoom in" }
				</button>
				<button onClick={this.handleZoomOut}>
					{ "Zoom out" }
				</button>
				<button onClick={this.handleReset}>
					{ "Reset" }
				</button>
			</div>
			<div style={wrapperStyles}>
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
							width={980}
							height={551}
							style={{
								width: "100%",
								height: "auto",
							}}
							>
							<ZoomableGroup center={[x,y]} zoom={zoom}>
								<Geographies geography="/static/world-50m.json">
									{(geographies, projection) =>
										geographies.map((geography, i) => geography.id !== "010" && (
											<Geography
												key={i}
												data-tip={geography.properties.name}
												geography={geography}
												projection={projection}
												onClick={this.props.selectCountry}
												style={{
													default: {
														fill: "#ECEFF1",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none",
													},
													hover: {
														fill: "#CFD8DC",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none",
													},
													pressed: {
														fill: "#FF5722",
														stroke: "#607D8B",
														strokeWidth: 0.75,
														outline: "none",
													},
												}}
											/>
										))}
								</Geographies>
									<Markers>
						                {
						                  regions.map((region, i) => (
						                    <Marker key={i} marker={region}>
						                      <circle
						                        cx={0}
						                        cy={0}
						                        r={6}
						                        fill="#FF5722"
						                        stroke="#DF3702"
						                      />
						                    </Marker>
						                  ))
						                }
	              					</Markers>
							</ZoomableGroup>
						</ComposableMap>
					)}
				</Motion>
				<ReactTooltip />
			</div>
			</div>
		);
	}
}

export default Map;