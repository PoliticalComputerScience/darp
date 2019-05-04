import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 id="title">
            DARP
          </h1>
          <h3 id="subhead"> 
            A visualization tool that compares data access, rights, and privacy policies around the world.
          </h3> 
          <br/>
          <Link className="App-link" to="/app">
            Here's our interactive map that displays our findings.
          </Link>
          <br/>
          <p>
            We've developed a rubric to evaluate effectiveness of these policies.
            We've explained the process <Link className="App-link" to="/details">here</Link>. 
          </p>
          <p id="text">
             
          </p>          
        </header>
      </div>
    );
  }
}

export default Landing;
