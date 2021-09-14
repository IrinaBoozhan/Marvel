import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';

import Comics from './components/Comics';
import Events from './components/Events';
import Series from './components/Series';
import Creators from './components/Creators';
import Stories from './components/Stories';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';


function App() {



  return (
    <Router>
      <div className="App container">
        <Header />

        <Switch>

          <Route path="/" exact >
            <Characters />
          </Route>

          <Route path='/characters' exact>
            <Characters />
          </Route>

          <Route path='/comics' exact >
            <Comics />
          </Route>

          <Route path='/series' exact>
            <Series />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/stories' exact>
            <Stories />
          </Route>
          .
          <Route path='/creators' exact>
            <Creators />
          </Route>

        </Switch>

      </div>
    </Router >
  );
}

export default App;
