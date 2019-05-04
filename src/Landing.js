import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Landing extends Component {
	render() {
		return (
			<div className="App">
				<div id="background"> </div>
				<div id="content">
					<header className="header">
						<h1 id="title">
							DARP
						</h1>
            <h2 id="subtitle">
            Data Access, Rights and Privacy
            </h2>
            <h2 id="pcs_title">
            by Political Computer Science @ Berkeley
            </h2>
						<h3 id="subhead">
							A visualization tool that compares data access, rights, and privacy policies around the world.
						</h3>
						<br/>
            <Link to="/app">
						<button id="button" to="/app"> 
							See our interactive map
						</button>
            </Link>
						<br/>
						<p id="rubric_des">
							We've developed a rubric to evaluate effectiveness of these policies.
							We've explained the process <Link className="App-link" to="/details">here</Link>.
						</p>
					</header>
				</div>
			</div>
		);
	}
}

export default Landing;
