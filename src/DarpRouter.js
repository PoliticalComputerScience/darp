import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Landing from './Landing';
import Details from './Details';

class DarpRouter extends Component {
  render() {
    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
    return (
      <Router basename={baseUrl}>
        <div id="routerdiv">
          <Route exact path='/' component={Landing} />
          <Route path='/app' component={App} />
          <Route path='/details' component={Details} />
        </div>
      </Router>
    );
  }
}

export default DarpRouter;
