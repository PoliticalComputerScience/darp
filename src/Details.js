import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import './App.css';

class Details extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link className="App-link" to="/">
            DARP
          </Link>
        </h1>
        <header className="header">
          <h3 id="subhead"> 
            Our process
          </h3> 
            <p id="info">
              To collect this data we
            </p> <br/>
          <h3 id="subhead"> 
            Our rubric
          </h3> 
            <p id="info">
              These are the 
            </p> <br/>
          <Link className="App-link" to="/app">
            Here's our interactive map that displays our findings.
          </Link> <br/> 
          <h3 id="subhead"> 
            Who we are
          </h3> 
          <p id="info">
            PCS at berkeley. if there are any errors / opinions pls email ?
          </p> <br/>
          <h3 id="subhead"> 
            Sources
          </h3> 
          <p id="info">
            Our sources include:
          </p> <br/>
                  
        </header>
      </div>
    );
  }
}

export default Details;
