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
							by <a class="pcs-link" href="https://pcs.berkeley.edu/">Political Computer Science @ Berkeley</a>
						</h2>
						<Link to="/app">
							<button id="button" to="/app">
								SEE OUR INTERACTIVE MAP
							</button>
						</Link>
						<h3 id="subhead">
							A visualization tool that compares data access, rights, and privacy policies around the world.
						</h3>
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
