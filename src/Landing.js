import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/app">
            Go to app
          </Link>
        </header>
      </div>
    );
  }
}

export default Landing;
