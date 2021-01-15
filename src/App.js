import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import Planets from './components/Planets';
import Home from './components/Home';
import CharactersCard from './components/CharactersCard';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
            <Characters />
            <Planets />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
