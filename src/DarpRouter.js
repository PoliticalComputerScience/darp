import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Landing from './Landing';

class DarpRouter extends Component {
  render() {
    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
    return (
      <Router basename={baseUrl}>
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/app' component={App} />
        </div>
      </Router>
    );
  }
}

export default DarpRouter;
