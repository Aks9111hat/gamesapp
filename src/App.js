import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import MemoryCard from './pages/memoryCard';
import ConnectFour from './pages/connectFour';
import TowerStacking from './pages/towerStacking';
import WhackAMole from './pages/whackAMole';
import CatchTheSticks from './pages/catchTheSticks';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/memory-card" component={MemoryCard} />
        <Route path="/connect-four" component={ConnectFour} />
        <Route path="/tower-stacking" component={TowerStacking} />
        <Route path="/whack-a-mole" component={WhackAMole} />
        <Route path="/catch-the-sticks" component={CatchTheSticks} />
      </Switch>
    </Router>
  );
};

export default App;
