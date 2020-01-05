import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import Movie from './containers/Movie'
import Cinema from './containers/Cinema';
import Place from './containers/Place';
import HistoryBooking from './containers/HistoryBooking';
import Booking from './containers/Booking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/place">
          <Place />
        </Route>
        <Route path="/history">
          <HistoryBooking />
        </Route>
        <Route path="/">
          <Cinema />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect()(App);
