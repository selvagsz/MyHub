import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
import CoreLayout from '../layouts/CoreLayout';
import Notes from './Notes';
import Todos from './Todos';

export const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={CoreLayout}>
      <Route path="/notes" component={Notes} />
      <Route path="/todos" component={Todos} />
    </Route>
  </Router>
);

export default Routes;
