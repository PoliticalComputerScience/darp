import React from 'react';
import ReactDOM from 'react-dom';
import DarpRouter from './DarpRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DarpRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
