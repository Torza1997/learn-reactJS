import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import App from './components/App';
import Home from './components/page/home';
import Contract from './components/page/contract';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/"  component ={App} />
      <Route path="/home"  component ={Home}/>
      <Route path="/contract"  component ={Contract}/>
  </Router>
);
export default Routes;